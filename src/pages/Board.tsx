import { useParams } from "react-router-dom";
import { doc, addDoc, collection, documentId } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { FirebaseStore as db } from "@/firebase";
import Dashboard from "@/components/Dashboard/Dashboard";
import Timeline from "@/components/Timeline/Timeline";
import BoardTimer from "@/components/BoardTimer/BoardTimer";
import Score from "@/components/Score/Score";

const Board = () => {
  const { id } = useParams();
  const [value, loading, error] = useDocument(doc(db, "matches", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const [events] = useCollection(collection(db, "matches/" + id + "/events"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const addEvent = async (name) => {
    const time = window.localStorage.getItem("timer");
    console.log(time);

    await addDoc(collection(db, "matches/" + id + "/events"), {
      name,
      time,
    });
  };

  const removeEvent = () => {};

  const options = [
    { text: "penal a favor" },
    { text: "penal en contra" },
    { text: "line a favor" },
    { text: "line en contra" },
    { text: "scrum a favor" },
    { text: "scrum en contra" },
    { text: "salida de 22" },
    { text: "recepcion salida de 22" },
    { text: "try a favor" },
    { text: "try en contra" },
    { text: "penal a los palos a favor" },
    { text: "penal a los palos en contra" },
    { text: "drop a favor" },
    { text: "drop en contra" },
    { text: "try penal a favor" },
    { text: "try penal en contra" },
  ];

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Document: Loading...</span>}
      {value && <span>Document: {JSON.stringify(value.data())}</span>}

      <div className="p-4 min-h-screen">
        <div className="gap-4 -mx-4 grid grid-flow-col h-full">
          <div className="">
            <BoardTimer />
          </div>
          {events && (
              <Timeline
              events={events.docs.map((doc) => ({ ...doc.data(), id: doc.id }))}
              removeEvent={removeEvent}
              />
              )}
              <Score />
          <div className="row-span-2">
            <Dashboard options={options} addEvent={addEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
