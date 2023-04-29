import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(
    parseInt(window.localStorage.getItem("timer")) || 0
  );
  const [running, setRunning] = useState(false);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime: number) => {
          window.localStorage.setItem("timer", prevTime + 10);
          return prevTime + 10;
        });
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="">
      <div className="text-center font-mono text-6xl">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button className="btn btn-wide w-full" onClick={stop}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="0"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>
        ) : (
          <button className="btn btn-wide w-full" onClick={start}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="0"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
