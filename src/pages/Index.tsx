import { useState } from "react";
import Matches from "../components/Matches/Matches";
import NewMatchModal from "../components/NewMatchModal/NewMatchModal";
import { useMatchesContext } from "../context/MatchesContext/MatchesContext";

const Index = () => {
  const { addMatch } = useMatchesContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSaveMatch = (match: string) => {
    addMatch(match);
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
      <Matches />
    </div>
  );
};

export default Index;
