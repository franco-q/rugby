import Points from "@/components/Points/Points";
import {
  TimerContextProvider,
  TimerContext,
} from "./context/TimerContext/TimerContext";
import Cards from "./components/Cards/Cards";
import Timer from "./components/Timer/Timer";
import Timeline from "./components/Timeline/Timeline";
import ResetBtn from "./components/ResetBtn/ResetBtn";

const Score = () => {
  const HOME = "HOME";
  const AWAY = "AWAY";

  return (
    <TimerContextProvider>
      <TimerContext.Consumer>
        {({ events, addEvent }) => (
          <div className="w-[32rem] mx-auto gap-4 grid">
            <div className="flex">
              <div className="w-1/2">
                <div className="grid gap-3 text-center">
                  <Points
                    points={events
                      .filter(
                        (e) => e.team === HOME && e.hasOwnProperty("value")
                      )
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
                    reds={events.filter(
                      (e) => e.team === HOME && e.name == "roja"
                    )}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="grid gap-3 text-center">
                  <Points
                    team={AWAY}
                    points={events
                      .filter(
                        (e) => e.team === AWAY && e.hasOwnProperty("value")
                      )
                      .map((e) => e.value)}
                    onScore={addEvent}
                  />
                  <Cards
                    team={AWAY}
                    add={addEvent}
                    yellows={events.filter(
                      (e) => e.team === AWAY && e.name == "amarilla"
                    )}
                    reds={events.filter(
                      (e) => e.team === AWAY && e.name == "roja"
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1">
              <Timer />
              <ResetBtn />
            </div>
            <div className="">
              <Timeline
                events={events
                  .sort((a, b) => parseInt(b.time) - parseInt(a.time))
                  .map((e) => ({
                    ...e,
                    color: e.team == HOME ? "blue" : "red",
                  }))}
                removeEvent={(e) => {}}
              />
            </div>
          </div>
        )}
      </TimerContext.Consumer>
    </TimerContextProvider>
  );
};

export default Score;
