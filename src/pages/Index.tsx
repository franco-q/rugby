import { useState } from "react";
import Matches from "../components/Matches/Matches";
import NewMatchModal from "../components/NewMatchModal/NewMatchModal";
import { useMatchesContext } from "../context/MatchesContext/MatchesContext";
import { addDoc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { FirebaseStore as db } from "../firebase";

const Index = () => {
  const [matches, loading, error] = useCollection(collection(db, "matches"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSaveMatch = async (name: string) => {
    await addDoc(collection(db, "matches"), {
      name,
    });
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="">
        <button className="btn" onClick={openModal}>
          Nuevo Partido
        </button>
      </div>
      <NewMatchModal
        isOpen={modalIsOpen}
        onSave={onSaveMatch}
        onClose={closeModal}
      />
      {matches && <Matches
        items={matches?.docs.map((match) => ({ ...match.data(), id: match.id }))}
      />}
    </div>
  );
};

export default Index;
