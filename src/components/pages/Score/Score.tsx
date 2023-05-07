import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Board from "@/components/Board/Board";

type addEventArgs = {
  team: string;
  name: string;
  value?: Number | undefined;
};

const Score = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setEvents(JSON.parse(window.localStorage.getItem("events")));
  }, []);

  const addEvent = async (payload: addEventArgs) => {
    const time = parseInt(window.localStorage.getItem("timer") || "0");
    setEvents((v) => {
      const _events = [
        ...v,
        {
          ...payload,
          time,
        },
      ];

      window.localStorage.setItem("events", JSON.stringify(_events));
      return _events;
    });
  };

  return (
    <>
      <Board
        events={events.sort((a, b) => parseInt(b.time) - parseInt(a.time))}
        addEvent={addEvent}
      />
    </>
  );
};

export default Score;
