import { createContext, useContext, useState, ReactNode } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { FirebaseStore as db } from "../../firebase";

export const MatchesContext = createContext({
  matches: [],
});

const MatchesContextProvider = ({ children }: { children: ReactNode }) => {
  const [matches, loading, error] = useCollection(collection(db, "spends"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const addMatch = async (name: string) => {
  };

  const removeMatches = (id: string) => {};
  const updateMatch = (id: string, match: any) => {};

  const value: any = {
    matches,
    loading,
    error,
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
