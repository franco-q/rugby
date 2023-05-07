type Props = {
  events: { name: string; id: string; time: number; team: "HOME" | "AWAY" }[];
  removeEvent: (id: string) => void;
};

const Timeline = ({ events, removeEvent }: Props) => {
  return (
    <div className="max-h-max overflow-y-auto">
      <div className="pl-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {events.map(({ name, id, time, team }, i: number) => (
            <li className="mb-10 ml-6 relative" key={i}>
              <span
                className={`flex absolute -left-9 justify-center items-center w-6 h-6  rounded-full top-1 bg-${
                  team === "HOME" ? "blue" : "red"
                }-500`}
              >
                <span className="text-white text-1xl">{events.length - i}</span>
              </span>
              <button
                className="btn btn-square btn-sm absolute right-0"
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
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {name}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-mono">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                {("0" + ((time / 10) % 100)).slice(-2)}
              </time>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
