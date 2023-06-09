import { Key } from "react";

const Dashboard = ({ options, addEvent }: { options: { text: string }[] }) => {

  return (
    <div className="grid grid-cols-4 gap-2">
      {options.map((option: { text: string }, i: Key) => (
        <div
          className="btn btn-lg"
          key={i}
          onClick={() => addEvent(option.text)}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
