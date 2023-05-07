import Link from "next/link";
import { Key } from "react";

type Props = {
  items: { id: Key; name: string; date: string }[];
};

const Matches = ({ items }: Props) => {
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
            <th>Nombre</th>
            <th>Fecha</th>
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
                <Link href={"/board/" + match.id}>{match.name}</Link>
              </td>
              <td>
                <Link href={"/board/" + match.id}>{match.date}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matches;
