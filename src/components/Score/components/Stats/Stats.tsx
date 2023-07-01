import {
  AWAY,
  CONVERSION,
  DROP,
  FREE_KICK,
  HOME,
  LINE_BUENO,
  LINE_PERDIDO,
  LINE_ROBADO,
  PALOS_CONVERTIDO,
  PALOS_ERRADO,
  PENAL,
  RED,
  SCRUM_BUENO,
  SCRUM_PERDIDO,
  SCRUM_ROBADO,
  TRY,
  TRY_PENAL,
  YELLOW,
} from "@/constants";
import React from "react";

function Stats({ events, addEvent }: any) {
  const types = [
    PENAL,
    FREE_KICK,
    LINE_BUENO,
    LINE_PERDIDO,
    LINE_ROBADO,
    SCRUM_BUENO,
    SCRUM_PERDIDO,
    SCRUM_ROBADO,
  ];

  return (
    <div>
      <div className="flex gap-4 w-full text-center justify-center items-center mb-3">
        <div className="font-mono text-5xl">
          {events
            .reduce(
              ([a, b]: number[], e: any) => {
                if (e.team === HOME && e.name === TRY) {
                  a += 1;
                }
                if (e.team === HOME && e.name === CONVERSION) {
                  b += 1;
                }
                return [a, b];
              },
              [0, 0]
            )
            .join("/")}
        </div>
        <div className="w-1/2 divider my-auto font-sans text-xl font-bold">
          trys/conversiones
        </div>
        <div className="font-mono text-5xl">
          {events
            .reduce(
              ([a, b]: number[], e: any) => {
                if (e.team === AWAY && e.name === TRY) {
                  a += 1;
                }
                if (e.team === AWAY && e.name === CONVERSION) {
                  b += 1;
                }
                return [a, b];
              },
              [0, 0]
            )
            .join("/")}
        </div>
      </div>
      <div className="flex gap-4 w-full text-center justify-center items-center mb-3">
        <div className="font-mono text-5xl">
          {events
            .reduce(
              ([a, b]: number[], e: any) => {
                if (e.team === HOME && e.name === PALOS_CONVERTIDO) {
                  a += 1;
                  b += 1;
                }
                if (e.team === HOME && e.name === PALOS_ERRADO) {
                  a += 1;
                }
                return [a, b];
              },
              [0, 0]
            )
            .join("/")}
        </div>
        <div className="w-1/2 divider my-auto font-sans text-xl font-bold">
          penales a los palos
        </div>
        <div className="font-mono text-5xl">
          {events
            .reduce(
              ([a, b]: number[], e: any) => {
                if (e.team === AWAY && e.name === PALOS_CONVERTIDO) {
                  a += 1;
                  b += 1;
                }
                if (e.team === AWAY && e.name === PALOS_ERRADO) {
                  a += 1;
                }
                return [a, b];
              },
              [0, 0]
            )
            .join("/")}
        </div>
      </div>
      {[TRY_PENAL, DROP, YELLOW, RED].map((t) => (
        <div
          className="flex gap-4 w-full text-center justify-center items-center mb-3"
          key={t}
        >
          <div className="font-mono text-5xl">
            {events.filter((e: any) => e.team === HOME && e.name === t).length}
          </div>
          <div className="w-1/2 divider my-auto font-sans text-xl font-bold">
            {t}
          </div>
          <div className="font-mono text-5xl">
            {events.filter((e: any) => e.team === AWAY && e.name === t).length}
          </div>
        </div>
      ))}
      {types.map((t) => (
        <div
          className="flex gap-4 w-full text-center justify-center items-center mb-3"
          key={t}
        >
          <button
            className="btn w-1/4 btn-ghost font-mono text-5xl"
            onClick={() => addEvent({ team: HOME, name: t })}
          >
            {events.filter((e: any) => e.team === HOME && e.name === t).length}
          </button>
          <div className="w-1/2 divider my-auto font-sans text-xl font-bold">
            {t}
          </div>
          <button
            className="btn w-1/4 btn-ghost font-mono text-5xl"
            onClick={() => addEvent({ team: AWAY, name: t })}
          >
            {events.filter((e: any) => e.team === AWAY && e.name === t).length}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Stats;
