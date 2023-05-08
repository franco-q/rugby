import { Key } from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";

type Props = {
  options: { text: string }[];
  addEvent: (args: { team: string; name: string; value?: Number }) => void;
  team: string;
  color:
    | "rose"
    | "pink"
    | "fuchsia"
    | "purple"
    | "violet"
    | "indigo"
    | "blue"
    | "sky"
    | "cyan"
    | "teal"
    | "emerald"
    | "green"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "red"
    | "warmGray"
    | "trueGray"
    | "gray"
    | "coolGray"
    | "blueGray";
};

const Actions = ({ options, addEvent, team, color }: Props) => {
  return (
    <div className="btn-group btn-group-vertical">
      {options.map((option, i: Key) => (
        <div
          className={`btn btn-block btn-lg bg-${color}-500 border-none`}
          key={i}
          onClick={() => addEvent({ name: option.text, team })}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
};

export default Actions;
