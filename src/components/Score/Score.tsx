import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Points from "./components/Points/Points";
import Cards from "./components/Cards/Cards";
import Timer from "./components/Timer/Timer";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import Navigation from "./components/Navigation/Navigation";
import { RED, YELLOW, AWAY, HOME } from "@/constants";
import useTimer from "easytimer-react-hook";

const Score = ({ seconds, events: _events }: any) => {
  const [timer] = useTimer({
    startValues: {
      seconds,
    },
    precision: "seconds",
  });

  const [events, setEvents] = useState<any>(_events);

  useEffect(() => {
    timer.on("secondsUpdated", (t) => {
      window.localStorage.setItem(
        "time",
        t.detail.timer.getTotalTimeValues().seconds.toString()
      );
    });
  }, [timer]);

  useEffect(() => {
    window.localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const reset = useCallback(() => {
    window.localStorage.clear();
    setEvents([]);
    timer.stop();
  }, []);

  const addEvent = useCallback((payload: any) => {
    setEvents((ev: any) => {
      const _events = [
        ...ev,
        {
          ...payload,
          time: timer.getTotalTimeValues().seconds,
          id: ev.length + Date.now(),
        },
      ];

      window.localStorage.setItem("events", JSON.stringify(_events));

      return _events;
    });
  }, []);

  const removeEvent = useCallback((id: string) => {
    setEvents((_events: []) =>
      _events.filter((e: { id: string }) => e.id != id)
    );
  }, []);

  const points = useMemo(
    () => ({
      [HOME]: events
        .filter((e: any) => e.team === HOME && e.hasOwnProperty("value"))
        .map((e: any) => e.value),
      [AWAY]: events
        .filter((e: any) => e.team === AWAY && e.hasOwnProperty("value"))
        .map((e: any) => e.value),
    }),
    [events]
  );

  const yellows = useMemo(
    () => ({
      [HOME]: events
        .filter((e: any) => e.team === HOME && e.name == YELLOW)
        .sort((a: any, b: any) => a.time - b.time),
      [AWAY]: events
        .filter((e: any) => e.team === AWAY && e.name == YELLOW)
        .sort((a: any, b: any) => a.time - b.time),
    }),
    [events]
  );

  const reds = useMemo(
    () => ({
      [HOME]: events.filter((e: any) => e.team === HOME && e.name == RED),
      [AWAY]: events.filter((e: any) => e.team === AWAY && e.name == RED),
    }),
    [events]
  );

  return (
    <div className="max-w-full w-[32rem] mx-auto gap-4 grid">
      <div className="flex gap-4 max-w-full">
        <div className="w-1/2">
          <div className="grid gap-4 text-center bg-red-100 rounded-xl p-3">
            <Points points={points[HOME]} team={HOME} onScore={addEvent} />
            <Cards
              timer={timer}
              team={HOME}
              add={addEvent}
              yellows={yellows[HOME]}
              reds={reds[HOME]}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid gap-4 text-center bg-blue-100 rounded-xl p-3">
            <Points team={AWAY} points={points[AWAY]} onScore={addEvent} />
            <Cards
              timer={timer}
              team={AWAY}
              add={addEvent}
              yellows={yellows[AWAY]}
              reds={reds[AWAY]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        <Timer timer={timer} />
        <ResetBtn onClick={reset} />
      </div>
      <Navigation events={events} removeEvent={removeEvent} />
    </div>
  );
};

export default Score;
