import { useState } from "react";

const Score = () => {
  const [h, setH] = useState([]);
  const [a, setA] = useState([]);

  return (
    <div>
      <table>
        <thead className="text-center font-mono text-6xl">
          <th>
            <span>{h.reduce((a, b) => a + b, 0)}</span>
          </th>
          <th>-</th>
          <th>
            <span>{a.reduce((a, b) => a + b, 0)}</span>
          </th>
        </thead>
        <tbody>
          <td>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <button className="btn" onClick={() => setH((v) => [...v, 5])}>
                +5
              </button>
              <button
                disabled={h[h.length - 1] !== 5}
                className="btn"
                onClick={() => setH((v) => [...v, 2])}
              >
                +2
              </button>
              <button className="btn" onClick={() => setH((v) => [...v, 7])}>
                +7
              </button>
              <button className="btn" onClick={() => setH((v) => [...v, 3])}>
                +3
              </button>
            </div>
          </td>
          <td></td>
          <td>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <button className="btn" onClick={() => setA((v) => [...v, 5])}>
                +5
              </button>
              <button
                disabled={a[a.length - 1] !== 5}
                className="btn"
                onClick={() => setA((v) => [...v, 2])}
              >
                +2
              </button>
              <button className="btn" onClick={() => setA((v) => [...v, 7])}>
                +7
              </button>
              <button className="btn" onClick={() => setA((v) => [...v, 3])}>
                +3
              </button>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Score;
