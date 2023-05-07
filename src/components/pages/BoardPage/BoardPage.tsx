import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Unsubscribe,
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import Board from "@/components/Board/Board";
import { FirebaseStore as db } from "@/firebase";

type addEventArgs = {
  team: string;
  name: string;
  value: Number;
};

const BoardPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [match, setMatch] = useState<any>();
  const [events, setEvents] = useState<any[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    typeof id === "string" &&
      (async () => {
        try {
          const docRef = doc(db, "matches", id);
          const docSnap = await getDoc(docRef);

          docSnap.exists() && setMatch(docSnap.data());

          const eventsCollectionRef = collection(
            db,
            "matches/" + id + "/events"
          );
          const q = query(eventsCollectionRef);
          unsubscribe = onSnapshot(q, (qs) => {
            const _events: any[] = qs.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setEvents(_events);
          });
        } catch (error: any) {
          setError(error.toString());
        }
      })();
    return () => unsubscribe && unsubscribe();
  }, [id]);

  const addEvent = async (payload: {
    team: string;
    name: string;
    value?: Number | undefined;
  }) => {
    const time = parseInt(window.localStorage.getItem("timer") || "0");

    await addDoc(collection(db, "matches/" + id + "/events"), {
      ...payload,
      time,
    });
  };

  return (
    <>
      {error && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      {events && !error && (
        <Board
          events={events.sort((a, b) => parseInt(b.time) - parseInt(a.time))}
          addEvent={addEvent}
        />
      )}
    </>
  );
};

export default BoardPage;
