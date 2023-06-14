type Props = {
  timer: any;
};

const Timer = ({ timer }: Props) => {
  const t = timer.getTotalTimeValues().seconds;

  return (
    <button
      className="btn btn-ghost btn-lg gap-3 font-mono text-6xl flex-nowrap"
      onClick={() => (!timer.isRunning() ? timer.start() : timer.pause())}
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
        {timer.isRunning() ? (
          <>
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </>
        ) : (
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        )}
      </svg>
      {[t / 60, t % 60].map((v) => ("0" + Math.floor(v)).slice(-2)).join(":")}
    </button>
  );
};

export default Timer;
