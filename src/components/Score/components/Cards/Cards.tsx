import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext/TimerContext";
import formatTime from "@/utils/formatTime";

type Props = {
  add: (args: any) => void;
  yellows: any;
  reds: any;
  team: any;
};

const Cards = ({ add, yellows, reds, team }: Props) => {
  const { time } = useContext(TimerContext);
  const activ = yellows.filter((i: any) => i.expires > time);
  const formatedTime =
    activ.length > 0 ? formatTime(activ[0].expires - time) : false;

  return (
    <>
      <div className="flex gap-2 justify-center">
        <button
          className="btn border-none bg-red-500 dark:text-black hover:text-white"
          onClick={() => add({ team, name: "roja" })}
        >
          {reds.length || " "}
        </button>
        <div className="indicator">
          {activ.length > 0 && formatedTime && (
            <span className="indicator-item badge badge-info">
              {formatedTime}
            </span>
          )}
          <button
            className="btn border-none bg-yellow-500 dark:text-black hover:text-white"
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

export default Cards;
