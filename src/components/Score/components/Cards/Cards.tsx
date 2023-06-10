import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext/TimerContext";
import formatTime from "@/utils/formatTime";

type Props = {
  add: (args: any) => void;
  yellows: any;
  reds: any;
  team: any;
  time: number;
};

const Cards = ({ add, yellows, reds, team, time }: Props) => {
  const formatedTime =
    yellows.length > 0 ? formatTime(yellows[0].expires - time) : false;

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
          {yellows.length > 0 && formatedTime && (
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
            {yellows.length || " "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
