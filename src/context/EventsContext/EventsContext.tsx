import { createContext, useContext, useState, ReactNode } from "react";

const initialEvents = [
  {
    name: "penal",
  },
  {
    name: "nock on",
  },
  {
    name: "foward pass",
  },
  {
    name: "kick",
  },
  {
    name: "scrum",
  },
  {
    name: "line",
  },
];

export const EventsContext = createContext({
  events: initialEvents,
});

const EventsContextProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<{}[]>(initialEvents);

  const addEvent = (name: any) => {
    setEvents([...events, { name }]);
  };
  const removeEvents = (id: string) => {
    setEvents((e) => e.filter((match: any) => match.id !== id));
  };
  const updateEvent = (id: string, match: any) => {
    setEvents((e) => {
      const index = e.findIndex((match: any) => match.id === id);
      e[index] = { ...e[index], match };
      return e;
    });
  };

  const value: any = {
    events,
    addEvent,
    removeEvents,
    updateEvent,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

export const EventsContextConsumer = EventsContext.Consumer;

export const useEventsContext = () => useContext(EventsContext);

export default EventsContextProvider;
