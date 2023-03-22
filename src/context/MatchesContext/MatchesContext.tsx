import { createContext, useContext, useState, ReactNode } from "react";

export const MatchesContext = createContext({
  matches: [],
});

const MatchesContextProvider = ({ children }: { children: ReactNode }) => {
  const [matches, setMatches] = useState<{}[]>([]);

  const addMatch = (name: any) => {
    setMatches([...matches, { name }]);
  };
  const removeMatches = (id: string) => {
    setMatches((e) => e.filter((match: any) => match.id !== id));
  };
  const updateMatch = (id: string, match: any) => {
    setMatches((e) => {
      const index = e.findIndex((match: any) => match.id === id);
      e[index] = { ...e[index], match };
      return e;
    });
  };

  const value: any = {
    matches,
    addMatch,
    removeMatches,
    updateMatch,
  };

  return (
    <MatchesContext.Provider value={value}>{children}</MatchesContext.Provider>
  );
};

export const MatchesContextConsumer = MatchesContext.Consumer;

export const useMatchesContext = () => useContext(MatchesContext);

export default MatchesContextProvider;
