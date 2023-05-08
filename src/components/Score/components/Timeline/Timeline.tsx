import { Key } from "react";

type Props = {
  events: {
    name: string;
    id: string;
    time: number;
    team: "HOME" | "AWAY";
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
  }[];
  removeEvent?: (id: string) => void;
};

const Timeline = ({ events, removeEvent }: Props) => {
  return (
    <div className="max-h-full overflow-y-auto">
      <div className="pl-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {events.map(({ name, id, time, color }, i: Key | number) => (
            <li
              className="rounded-lg mb-10 ml-5 px-2 relative bg-slate-50 py-1 flex justify-between items-center"
              key={i as Key}
            >
              <span
                className={`flex absolute -left-8 justify-center items-center w-6 h-6 rounded-full top-4 bg-${color}-500`}
              >
                <small className="text-white">
                  {events.length - (i as number)}
                </small>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {name}
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-mono">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </time>
              </h3>
              {removeEvent && (
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => removeEvent(id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
