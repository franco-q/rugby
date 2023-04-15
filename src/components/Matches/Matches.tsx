import { Link } from "react-router-dom";

const Matches = ({ items }) => {
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
          {items.map((match) => (
            <tr key={match.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <Link to={"/board/" + match.id}>{match.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matches;
