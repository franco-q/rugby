import { useMatchesContext } from "../../context/MatchesContext/MatchesContext";

const Matches = () => {
  const { matches } = useMatchesContext();
  return (
    <div className="overflow-x-auto w-full my-3">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, i) => (
            <tr key={i}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <span>{match.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matches;
