import { createContext, useState, useEffect, ReactNode } from "react";

type addEventArgs = {
  team: string;
  name: string;
  value?: Number | undefined;
};

interface TimerContextProps {
  time: number;
  running: boolean;
  events: any[];
  reset: () => void;
  stop: () => void;
  play: () => void;
  toggle: () => void;
  addEvent: (args: addEventArgs) => void;
  removeEvent: (id: string) => void;
}

export const TimerContext = createContext<TimerContextProps>({
  time: 0,
  running: false,
  events: [],
  reset: () => {},
  stop: () => {},
  play: () => {},
  toggle: () => {},
  addEvent: () => {},
  removeEvent: () => {},
});

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const _timer =
      typeof window === "object" ? window.localStorage.getItem("timer") : "0";
    setTime(parseInt(_timer || "0", 10));

    const ls = window.localStorage.getItem("events");
    if (ls) {
      setEvents(JSON.parse(ls));
    }
  }, []);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((v) => {
          let t = (v || 0) + 10;
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
    localStorage.setItem("events", "[]");
    setTime(0);
    setEvents([]);
    setRunning(false);
  };

  const stop = () => {
    setRunning(false);
  };

  const play = () => {
    setRunning(true);
  };

  const toggle = () => {
    setRunning((v) => !v);
  };

  const addEvent = async (payload: addEventArgs) => {
    const time = parseInt(window.localStorage.getItem("timer") || "0");
    setEvents((ev) => {
      const _events = [
        ...ev,
        {
          ...payload,
          time,
          id: ev.length + time,
        },
      ];

      window.localStorage.setItem("events", JSON.stringify(_events));
      return _events;
    });
  };

  const removeEvent = (id: string) => {
    setEvents((_events) => _events.filter((e) => e.id != id));
  };

  const value = {
    time,
    running,
    events,
    reset,
    stop,
    play,
    toggle,
    addEvent,
    removeEvent,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
