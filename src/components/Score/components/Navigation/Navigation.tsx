import { memo, useState } from "react";
import Stats from "@/components/Score/components/Stats/Stats";
import Timeline from "@/components/Score/components/Timeline/Timeline";
import { AWAY } from "@/constants";

const Navigation = ({ events, removeEvent }: any) => {
  const [view, setView] = useState<string>("timeline");

  const views: any = {
    timeline: Timeline,
    stats: Stats,
  };

  const Component: any = views[view];

  return (
    <>
      <div className="tabs tabs-boxed justify-around">
        <button
          className={`tab h-10 flex-grow ${
            view === "timeline" ? "tab-active" : ""
          }`}
          onClick={() => setView("timeline")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </button>
        <button
          className={`tab h-10 flex-grow ${
            view === "stats" ? "tab-active" : ""
          }`}
          onClick={() => setView("stats")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
        </button>
      </div>
      <Component
        events={events
          .sort((a: any, b: any) => parseInt(b.id) - parseInt(a.id))
          .map((e: any) => ({
            ...e,
            color: e.team == AWAY ? "blue" : "red",
          }))}
        removeEvent={removeEvent}
      />
    </>
  );
};

export default memo(Navigation);
