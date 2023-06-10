import { useState, useRef, useEffect, useCallback } from "react";
import Points from "./components/Points/Points";
import Cards from "./components/Cards/Cards";
import Timer from "./components/Timer/Timer";
import Timeline from "./components/Timeline/Timeline";
import ResetBtn from "./components/ResetBtn/ResetBtn";

const lsInt = (k: string) =>
  parseInt(window.localStorage.getItem(k) || "0", 10);

const Score = () => {
  const HOME = "HOME";
  const AWAY = "AWAY";
  const YELLOW = "amarilla";
  const RED = "roja";

  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<any>([]);
  const interval = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => {
        let visible = lsInt("visible");
        let hidden = lsInt("hidden");
        let timer = lsInt("timer");

        if (timer > 10800000) {
          setRunning(false);
          return;
        }

        if (visible > hidden) {
          timer += visible - hidden;
          window.localStorage.removeItem("visible");
          window.localStorage.removeItem("hidden");
        } else {
          timer += 10;
        }

        window.localStorage.setItem("timer", timer.toString());
        setTime(timer);
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
      setEvents(JSON.parse(window.localStorage.getItem("events") || "[]"));
    }

    return () => clearInterval(interval.current);
  }, []);

  const reset = useCallback(() => {
    window.localStorage.clear();
    setTime(0);
    setRunning(false);
  }, []);

  const addEvent = async (payload: any) => {
    const time = parseInt(window.localStorage.getItem("timer") || "0");
    setEvents((ev: any) => {
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
    setEvents((_events: []) =>
      _events.filter((e: { id: string }) => e.id != id)
    );
  };

  return (
    <div className="max-w-full w-[32rem] mx-auto gap-4 grid">
      <div className="flex gap-4 max-w-full">
        <div className="w-1/2">
          <div className="grid gap-4 text-center bg-red-100 rounded-xl p-3">
            <Points
              points={events
                .filter(
                  (e: any) => e.team === HOME && e.hasOwnProperty("value")
                )
                .map((e: any) => e.value)}
              team={HOME}
              onScore={addEvent}
            />
            <Cards
              time={time}
              team={HOME}
              add={addEvent}
              yellows={events.filter(
                (e: any) =>
                  e.team === HOME && e.name == YELLOW && e.expires > time
              )}
              reds={events.filter((e: any) => e.team === HOME && e.name == RED)}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid gap-4 text-center bg-blue-100 rounded-xl p-3">
            <Points
              team={AWAY}
              points={events
                .filter(
                  (e: any) => e.team === AWAY && e.hasOwnProperty("value")
                )
                .map((e: any) => e.value)}
              onScore={addEvent}
            />
            <Cards
              time={time}
              team={AWAY}
              add={addEvent}
              yellows={events.filter(
                (e: any) =>
                  e.team === AWAY && e.name == YELLOW && e.expires > time
              )}
              reds={events.filter((e: any) => e.team === AWAY && e.name == RED)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        <Timer
          time={time}
          running={running}
          onClick={() => setRunning((v) => !v)}
        />
        <ResetBtn onClick={reset} />
      </div>
      <div className="">
        <Timeline
          events={events
            .sort((a: any, b: any) => parseInt(b.id) - parseInt(a.id))
            .map((e: any) => ({
              ...e,
              color: e.team == AWAY ? "blue" : "red",
            }))}
          removeEvent={removeEvent}
        />
      </div>
    </div>
  );
};

export default Score;
