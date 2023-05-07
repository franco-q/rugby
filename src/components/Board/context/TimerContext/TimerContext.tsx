import { createContext, useState, useEffect, ReactNode } from "react";

interface TimerContextProps {
  time: number;
  running: boolean;
  reset: () => void;
  stop: () => void;
  play: () => void;
  toggle: () => void;
}

export const TimerContext = createContext<TimerContextProps>({
  time: 0,
  reset: () => {},
  stop: () => {},
  play: () => {},
  toggle: () => {},
  running: false,
});

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState<number>();
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const _timer =
      typeof window === "object" ? window.localStorage.getItem("timer") : "0";
    setTime(parseInt(_timer || "0", 10));
  });

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

  const reset = () => {
    localStorage.setItem("timer", "0");
    setTime(0);
    setRunning(false);
  };

  const stop = () => {
    setRunning(false);
  };

  const play = () => {
    setRunning(true);
  };
  const toggle = () => setRunning((v) => !v);

  const value = {
    time,
    running,
    reset,
    stop,
    play,
    toggle,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
