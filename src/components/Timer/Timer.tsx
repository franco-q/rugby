type Props = {
  time: any;
  start: any;
  stop: any;
  reset: any;
  foward: any;
  running: any;
};

const Timer = ({ time, start, stop, reset, foward, running }: Props) => {
  return (
    <div className="">
      <div className="text-center font-mono text-6xl">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-group justify-center">
        {running ? (
          <button className="btn" onClick={stop}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="0"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>
        ) : (
          <button className="btn" onClick={start}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="0"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        )}
        <button className="btn" onClick={reset}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 4 1 10 7 10"></polyline>
            <polyline points="23 20 23 14 17 14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
          </svg>
        </button>
        <button className="btn" onClick={foward}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <polygon points="2 19 11 12 2 5 2 19"></polygon>
          </svg>
        </button>
      </div>
      <div>{running ? "running" : "no running"}</div>
    </div>
  );
};

export default Timer;
