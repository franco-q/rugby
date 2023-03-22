import { Route, Routes } from "react-router-dom";
import TimerContextProvider from "./context/TimerContext/TimerContext";
import MatchesContextProvider from "./context/MatchesContext/MatchesContext";
import EventsContextProvider from "./context/EventsContext/EventsContext";
import Index from "@/pages/Index";
import Events from "@/pages/Events";
import Player from "@/pages/Player";
import Match from "@/pages/Match";
import Navbar from "@/components/Navbar/Navbar";

function App() {
  return (
    <EventsContextProvider>
      <MatchesContextProvider>
        <TimerContextProvider>
          <div className="p-4 h-screen max-h-screen">
            <Navbar />
            <div className="my-4">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
                <Route path="/player" element={<Player />} />
                <Route path="/match/:id" element={<Match />} />
              </Routes>
            </div>
          </div>
        </TimerContextProvider>
      </MatchesContextProvider>
    </EventsContextProvider>
  );
}

export default App;
