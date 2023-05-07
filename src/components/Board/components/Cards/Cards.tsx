import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext/TimerContext";

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
}

const Cards = ({ add, yellows, reds, team }) => {
  const { time, running } = useContext(TimerContext);

  const activ = yellows.filter((i) => i.expires > time);

  return (
    <>
      <div className="flex gap-2 justify-center">
        <button
          className="btn bg-red-500"
          onClick={() => add({ team, name: "roja" })}
        >
          {reds.length || " "}
        </button>
        <div className="indicator">
          {activ.length > 0 && (
            <Indicator time={activ[activ.length - 1].expires - time} />
          )}
          <button
            className="btn bg-yellow-500"
            onClick={() =>
              add({ team, time, expires: time + 600000, name: "amarilla" })
            }
          >
            {activ.length || " "}
          </button>
        </div>
      </div>
    </>
  );
};

const Indicator = ({ time }) => {
  return (
    time > 0 && (
      <span className="indicator-item badge badge-info">
        {formatTime(time)}
      </span>
    )
  );
};

export default Cards;
