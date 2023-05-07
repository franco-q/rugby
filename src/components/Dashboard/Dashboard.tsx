import { Key } from "react";

type Params = {
  options: { text: string }[];
  addEvent: (arg: { name: string; team: "HOME" | "AWAY" }) => void;
};

const Dashboard = ({ options, addEvent }: Params) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="grid grid-cols-2 gap-2">
        {options.map((option: { text: string }, i: Key) => (
          <div
            className="btn btn-lg bg-blue-500"
            key={i}
            onClick={() => addEvent({ name: option.text, team: "HOME" })}
          >
            {option.text}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option: { text: string }, i: Key) => (
          <div
            className="btn btn-lg bg-red-500"
            key={i}
            onClick={() => addEvent({ name: option.text, team: "AWAY" })}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
