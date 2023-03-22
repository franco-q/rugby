import { useEventsContext } from "@/context/EventsContext/EventsContext";

const Events = () => {
  const { events } = useEventsContext();
  return (
    <div className="overflow-x-auto w-full my-3">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="w-16">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <span>{e.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
