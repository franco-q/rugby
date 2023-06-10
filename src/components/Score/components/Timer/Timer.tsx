type Props = {
  className?: string;
  time: number;
  running: boolean;
  onClick: () => void;
};

const Timer = ({ className, time, running, onClick }: Props) => {
  return (
    <button
      className={`${
        className || ""
      } btn btn-ghost btn-lg gap-3 font-mono text-6xl flex-nowrap`}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="0"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {running ? (
          <>
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </>
        ) : (
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        )}
      </svg>
      <>
        {time > 3600000 &&
          ("0" + Math.floor((time / 3600000) % 60)).slice(-2) + ":"}
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </>
    </button>
  );
};

export default Timer;
