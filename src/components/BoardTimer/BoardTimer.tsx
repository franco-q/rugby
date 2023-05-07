/* eslint-disable react/display-name */
import { memo, useEffect, useRef, useState } from "react";

const _Timer = () => {
  const [lstime, setLstime] = useState<number | undefined>(undefined);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let t = window.localStorage.getItem("timer") || "0";
      setLstime(parseInt(t as string));
    }
  }, []);

  return (
    <>
      <button
        className="btn btn-ghost btn-lg gap-3 font-mono text-6xl flex-nowrap"
        onClick={() => setRunning((v) => !v)}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {running ? (
            <>
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </>
          ) : (
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          )}
        </svg>
        {typeof lstime === "number" && (
          <Chronometer lstime={lstime} running={running} />
        )}
      </button>
    </>
  );
};

const Chronometer = ({
  lstime,
  running,
}: {
  lstime: number;
  running: boolean;
}) => {
  const [time, setTime] = useState(lstime);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((v) => {
          let t = v + 10;
          window.localStorage.setItem("timer", t.toString());
          return t;
        });
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      {("0" + ((time / 10) % 100)).slice(-2)}
    </>
  );
};

export default memo(_Timer);
