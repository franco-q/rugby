import { Key } from "react";
import Points from "@/components/Points/Points";

import Cards from "./components/Cards/Cards";
import Timer from "./components/Timer/Timer";
import { TimerContextProvider } from "./context/TimerContext/TimerContext";
import Actions from "./components/Actions/Actions";
import Timeline from "./components/Timeline/Timeline";

type Props = {
  events: any[];
  addEvent: (args: { team: string; name: string; value?: Number }) => void;
};

const options = [
  { text: "penal concedido" },
  { text: "line" },
  { text: "scrum" },
  { text: "salida de 22" },
  { text: "breakdown" },
  { text: "tackle errado" },
  { text: "pick&go" },
  { text: "ruck" },
  { text: "pelota pescada" },
];

const Board = ({ events, addEvent }: Props) => {
  const HOME = "HOME";
  const AWAY = "AWAY";
  const timeline = events.map((e) => ({
    ...e,
    color: e.team == HOME ? "blue" : "red",
  }));
  return (
    <TimerContextProvider>
      <div className="h-full">
        <div className="flex h-full gap-4 md:max-w-screen-lg mx-auto flex-wrap">
          <div
            className="h-full w-full md:max-w-sm gap-4 grid"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div>
              <Timer />
            </div>
            <Timeline events={timeline} />
          </div>
          <div className="w-1/2 md:w-auto md:grow">
            <div className="grid gap-2 text-center">
              <Points
                points={events
                  .filter((e) => e.team === HOME && e.hasOwnProperty("value"))
                  .map((e) => e.value)}
                team={HOME}
                onScore={addEvent}
              />
              <Cards
                team={HOME}
                add={addEvent}
                yellows={events.filter(
                  (e) => e.team === HOME && e.name == "amarilla"
                )}
                reds={events.filter((e) => e.team === HOME && e.name == "roja")}
              />
              <div>
                <Actions
                  options={options}
                  addEvent={addEvent}
                  team={HOME}
                  color="blue"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-auto md:grow">
            <div className="grid gap-2 text-center">
              <Points
                team={AWAY}
                points={events
                  .filter((e) => e.team === AWAY && e.hasOwnProperty("value"))
                  .map((e) => e.value)}
                onScore={addEvent}
              />
              <Cards
                team={AWAY}
                add={addEvent}
                yellows={events.filter(
                  (e) => e.team === AWAY && e.name == "amarilla"
                )}
                reds={events.filter((e) => e.team === AWAY && e.name == "roja")}
              />
              <div>
                <Actions
                  team={AWAY}
                  options={options}
                  addEvent={addEvent}
                  color="red"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TimerContextProvider>
  );
};

export default Board;
