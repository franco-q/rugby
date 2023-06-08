import { useEffect, useRef, useState } from "react";

const lsInt = (k) => parseInt(window.localStorage.getItem(k) || "0", 10);

const stopWatch = (setTime) => {
  let visible = lsInt("visible");
  let hidden = lsInt("hidden");
  let timer = lsInt("timer");

  if (visible > hidden) {
    timer += visible - hidden;
    window.localStorage.removeItem("visible");
    window.localStorage.removeItem("hidden");
  } else {
    timer += 10;
  }

  window.localStorage.setItem("timer", timer.toString());
  setTime(timer);
};

const ScorePage = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const interval = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => {
        stopWatch(setTime);
      }, 10);
    } else if (!running) {
      window.localStorage.removeItem("visible");
      window.localStorage.removeItem("hidden");
      clearInterval(interval.current);
    }
  }, [running]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTime(parseInt(window.localStorage.getItem("timer") || "0", 10));
    }

    return () => clearInterval(interval.current);
  }, []);

  const reset = () => {
    window.localStorage.clear();
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <button
        className={`btn btn-ghost btn-lg gap-3 font-mono text-6xl flex-nowrap`}
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
        <>
          {time > 3600000 &&
            ("0" + Math.floor((time / 3600000) % 60)).slice(-2) + ":"}
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </>
      </button>
      <button
        className="btn btn-ghost btn-lg gap-3 font-mono text-6xl"
        onClick={reset}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-trash-2"
          viewBox="0 0 24 24"
        >
          <path d="M3 6L5 6 21 6"></path>
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
          <path d="M10 11L10 17"></path>
          <path d="M14 11L14 17"></path>
        </svg>
      </button>
    </div>
  );
};

export default ScorePage;
