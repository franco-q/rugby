import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export const TimerContext = createContext({
  time: 0,
  running: false,
  setTime: () => {},
  setRunning: () => {},
});

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .toUpperCase();
};

const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let interval: number | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => setTime(0);

  const addEvent = (event: string) => {
    setRunning(false);
    let id = uuid();
    setEvents([{ event, time, id }, ...events]);
  };

  const removeEvent = (id: string) => {
    setEvents((e) => e.filter((event: { id: string }) => event.id !== id));
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        running,
        events,
        stop,
        start,
        reset,
        addEvent,
        removeEvent,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const TimerContextConsumer = TimerContext.Consumer;

export const useTimerContext = () => useContext(TimerContext);

export default TimerContextProvider;
