import { useTimerContext } from "../../context/TimerContext/TimerContext";

const Timer = () => {
  const { time, start, stop, reset } = useTimerContext();

  return (
    <div className="">
      <div className="text-center font-mono text-6xl">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-group justify-center">
        <button className="btn" onClick={start}>
          Start
        </button>
        <button className="btn" onClick={stop}>
          Stop
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
