import { Key } from "react";

const Dashboard = ({ options, addEvent }: { options: { text: string }[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="grid grid-cols-2 gap-2">
        {options.map((option: { text: string }, i: Key) => (
          <div
            className="btn btn-lg btn-info"
            key={i}
            onClick={() => addEvent({name: option.text, team: 'HOME'})}
          >
            {option.text}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option: { text: string }, i: Key) => (
          <div
            className="btn btn-lg btn-primary"
            key={i}
            onClick={() => addEvent({name: option.text, team: 'AWAY'})}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
