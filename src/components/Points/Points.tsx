type Team = "HOME" | "AWAY";

type Props = {
  team: Team;
  onScore: (arg: { team: Team; value: number; name: string }) => void;
  points: string[];
};

const Points = ({ team, onScore, points }: Props) => {
  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-lg text-center font-mono text-6xl w-52"
      >
        {points.reduce(
          (a, b) => parseInt(a.toString()) + parseInt(b.toString()),
          0
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
      >
        <li>
          <button
            className="btn btn-ghost btn-md"
            onClick={() => {
              onScore({ team, value: 5, name: "try" });
            }}
          >
            try
          </button>
        </li>
        <li>
          <button
            disabled={parseInt(points[0]) !== 5}
            className="btn btn-ghost btn-md"
            onClick={() => {
              onScore({ team, value: 2, name: "conv." });
            }}
          >
            conversion
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost btn-md"
            onClick={() => {
              onScore({ team, value: 7, name: "try penal" });
            }}
          >
            try penal
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost btn-md"
            onClick={() => {
              onScore({ team, value: 3, name: "drop" });
            }}
          >
            drop
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost btn-md"
            onClick={() => {
              onScore({ team, value: 3, name: "penal" });
            }}
          >
            penal
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Points;
