import { memo, useId } from "react";

type Team = "HOME" | "AWAY";

type Props = {
  team: Team;
  onScore: (arg: { team: Team; value?: number; name: string }) => void;
  points: string[];
};

const Points = ({ team, onScore, points }: Props) => {
  const id = useId();
  return (
    <>
      <label
        htmlFor={"points_modal_" + team}
        className="btn btn-ghost btn-lg text-center font-mono text-8xl text:md-9xl w-full h-auto dark:text-black p-0"
      >
        {points.reduce(
          (a, b) => parseInt(a.toString()) + parseInt(b.toString()),
          0
        )}
      </label>
      <input
        type="checkbox"
        id={"points_modal_" + team}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative sm:max-w-[20rem!important]">
          <label
            htmlFor={"points_modal_" + team}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="font-mono text-2xl">{team}</h1>
          <div>
            <label
              htmlFor={"points_modal_" + team}
              className="btn btn-ghost btn-md btn-wide"
              onClick={() => {
                onScore({ team, value: 5, name: "try" });
              }}
            >
              try
            </label>
          </div>
          {parseInt(points[0]) == 5 && (
            <div>
              <label
                htmlFor={"points_modal_" + team}
                className="btn btn-ghost btn-md btn-wide"
                onClick={() => {
                  onScore({ team, value: 2, name: "conv." });
                }}
              >
                conversion
              </label>
            </div>
          )}
          <div>
            <label
              htmlFor={"points_modal_" + team}
              className="btn btn-ghost btn-md btn-wide"
              onClick={() => {
                onScore({ team, value: 7, name: "try penal" });
              }}
            >
              try penal
            </label>
          </div>
          <div>
            <label
              htmlFor={"points_modal_" + team}
              className="btn btn-ghost btn-md btn-wide"
              onClick={() => {
                onScore({ team, value: 3, name: "drop" });
              }}
            >
              drop
            </label>
          </div>
          <div>
            <label
              htmlFor={"points_modal_" + team}
              className="btn btn-ghost btn-md btn-wide"
              onClick={() => {
                onScore({ team, value: 3, name: "penal" });
              }}
            >
              penal
            </label>
          </div>
          <div>
            <div className="divider">LINE</div>
            <div className="btn-group">
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-green-500"
                onClick={() => {
                  onScore({ team, value: 3, name: "line bueno" });
                }}
              >
                BUENO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-red-500"
                onClick={() => {
                  onScore({ team, value: 3, name: "line perdido" });
                }}
              >
                PERDIDO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-sky-500"
                onClick={() => {
                  onScore({ team, value: 3, name: "line robado" });
                }}
              >
                ROBADO
              </label>
            </div>
          </div>
          <div>
            <div className="divider">SCRUM</div>
            <div className="btn-group">
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-green-500"
                onClick={() => {
                  onScore({ team, name: "scrum bueno" });
                }}
              >
                BUENO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-red-500"
                onClick={() => {
                  onScore({ team, name: "scrum perdido" });
                }}
              >
                PERDIDO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn border-0 bg-sky-500"
                onClick={() => {
                  onScore({ team, name: "scrum robado" });
                }}
              >
                ROBADO
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Points);
