import { Key } from "react";
import { useTimerContext } from "../../context/TimerContext/TimerContext";

const Dashboard = ({ options }: { options: { text: string }[] }) => {
  const { addEvent, time } = useTimerContext();

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      {options.map((option: { text: string }, i: Key) => (
        <div
          className="btn btn-lg h-full"
          key={i}
          onClick={() => time > 0 && addEvent(option.text)}
        >
          {option.text} {i}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
