import EventsTable from "@/components/EventsTable/EventsTable";
import NewEventModal from "@/components/NewEventModal/NewEventModal";
import { useEventsContext } from "@/context/EventsContext/EventsContext";
import { useState } from "react";

const Events = () => {
  const { addEvent } = useEventsContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSaveEvent = (event: string) => {
    addEvent(event);
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
          NUEVO EVENTO
        </button>
      </div>
      <NewEventModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSave={onSaveEvent}
      />
      <EventsTable />
    </div>
  );
};

export default Events;
