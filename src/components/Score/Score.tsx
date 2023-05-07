import { memo } from "react";

type Props = {
  onScore: (arg: {
    name: string;
    team: "HOME" | "AWAY";
    value: number | string;
  }) => void;
  home: string[];
  away: string[];
};

const Score = ({ onScore, home, away }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <ScoreTeam points={home} onScore={onScore} team="HOME" />
      <ScoreTeam points={away} onScore={onScore} team="AWAY" />
    </div>
  );
};

export default memo(Score);

const ScoreTeam = ({
  points,
  onScore,
  team,
}: {
  points: string[];
  onScore: (arg: {
    name: string;
    team: "HOME" | "AWAY";
    value: number | string;
  }) => void;
  team: "HOME" | "AWAY";
}) => {
  return (
    <div className="text-center">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-lg">
          <div className="text-center font-mono text-6xl">
            <span>
              {points.reduce(
                (a, b) => parseInt(a.toString()) + parseInt(b.toString()),
                0
              )}
            </span>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
              disabled={points[0] !== "5"}
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
    </div>
  );
};
