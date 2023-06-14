import { memo, useEffect, useRef, useState } from "react";
import formatTime from "@/utils/formatTime";

type Props = {
  add: (args: any) => void;
  yellows: any[];
  reds: any;
  team: any;
  timer: any;
};

const Cards = ({ add, yellows, reds, team, timer }: Props) => {
  const active = yellows.filter(
    (y) => y.expires > timer.getTotalTimeValues().seconds
  );
  const time =
    active[0] && active[0]
      ? active[0].expires - timer.getTotalTimeValues().seconds
      : false;

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
          {time && (
            <span className="indicator-item badge badge-info">
              {[time / 60, time % 60]
                .map((v) => ("0" + Math.floor(v)).slice(-2))
                .join(":")}
            </span>
          )}
          <button
            className="btn border-none bg-yellow-500 dark:text-black hover:text-white"
            onClick={() =>
              add({
                team,
                time: timer.getTotalTimeValues().seconds,
                expires: timer.getTotalTimeValues().seconds + 600,
                name: "amarilla",
              })
            }
          >
            {active.length || " "}
          </button>
        </div>
      </div>
    </>
  );
};

// export default Cards;

export default memo(Cards, (a, b) => {
  return b.yellows.every(
    (y) => y.expires < b.timer.getTotalTimeValues().seconds
  )
    ? a.yellows.length === b.yellows.length
    : false;
});
