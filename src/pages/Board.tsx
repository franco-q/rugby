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

  const [events, loadingEvents] = useCollection(
    collection(db, "matches/" + id + "/events"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const addEvent = async ({ name, team }: { name: string; team: string }) => {
    const time = window.localStorage.getItem("timer");
    await addDoc(collection(db, "matches/" + id + "/events"), {
      name,
      team,
      time,
    });
  };

  const removeEvent = () => {};

  const options = [
    { text: "penal" },
    { text: "line" },
    { text: "scrum" },
    { text: "salida de 22" },
    { text: "breakdown" },
    { text: "tackle errado" },
    { text: "amarilla" },
    { text: "roja" },
    { text: "pick&go" },
    { text: "ruck" },
  ];

  const onScore = async ({
    team,
    name,
    value,
  }: {
    team: string;
    name: string;
    value: Number;
  }) => {
    const time = window.localStorage.getItem("timer");
    await addDoc(collection(db, "matches/" + id + "/events"), {
      name,
      team,
      value,
      time,
    });
  };

  return loadingEvents ? (
    <></>
  ) : (
    <div>
      <div className="p-4 min-h-screen">
        <div className="gap-4 -mx-4 grid grid-flow-col h-full">
          <div className="">
            <BoardTimer />
          </div>
          {events && (
            <Timeline
              events={events.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) => b.time - a.time)}
              removeEvent={removeEvent}
            />
          )}
          <div className="row-span-2">
            <Score
              onScore={onScore}
              log={events.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) => b.time - a.time)}
              home={events.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((e) => e.team === "HOME" && e.hasOwnProperty("value"))
                .sort((a, b) => b.time - a.time)
                .map((e) => e.value)}
              away={events.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((e) => e.team === "AWAY" && e.hasOwnProperty("value"))
                .sort((a, b) => b.time - a.time)
                .map((e) => e.value)}
            />
            <Dashboard options={options} addEvent={addEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
