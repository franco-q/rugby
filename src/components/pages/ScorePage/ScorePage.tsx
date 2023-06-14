import { useEffect, useState } from "react";
import Score from "@/components/Score/Score";

const ScorePage = () => {
  const [time, setTime] = useState<number | boolean>(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setTime(parseInt(window.localStorage.getItem("time") || "0", 10));
    setEvents(JSON.parse(window.localStorage.getItem("events") || "[]"));
  }, []);

  return time !== false && <Score seconds={time} events={events} />;
};

export default ScorePage;
