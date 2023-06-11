import { memo, useId } from "react";
import {
  CONVERSION,
  DROP,
  FREE_KICK,
  LINE_BUENO,
  LINE_PERDIDO,
  LINE_ROBADO,
  PALOS_CONVERTIDO,
  PALOS_ERRADO,
  PENAL,
  SCRUM_BUENO,
  SCRUM_PERDIDO,
  SCRUM_ROBADO,
  TRY,
  TRY_PENAL,
} from "@/constants";

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
                onScore({ team, value: 5, name: TRY });
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
                  onScore({ team, value: 2, name: CONVERSION });
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
                onScore({ team, value: 7, name: TRY_PENAL });
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
                onScore({ team, value: 3, name: DROP });
              }}
            >
              drop
            </label>
          </div>
          <div>
            <div className="divider">PENALES A LOS PALOS</div>
            <div className="btn-group w-full">
              <label
                htmlFor={"points_modal_" + team}
                className="w-1/2 btn border-0 bg-green-400"
                onClick={() => {
                  onScore({ team, value: 3, name: PALOS_CONVERTIDO });
                }}
              >
                CONVERTIDO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="w-1/2 btn border-0 bg-red-400"
                onClick={() => {
                  onScore({ team, name: PALOS_ERRADO });
                }}
              >
                ERRADO
              </label>
            </div>
          </div>
          <div>
            <div className="divider">LINE</div>
            <div className="btn-group w-full">
              <label
                htmlFor={"points_modal_" + team}
                className="w-1/3 btn border-0 bg-green-400"
                onClick={() => {
                  onScore({ team, name: LINE_BUENO });
                }}
              >
                BUENO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="w-1/3 btn border-0 bg-red-400"
                onClick={() => {
                  onScore({ team, name: LINE_PERDIDO });
                }}
              >
                PERDIDO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="w-1/3 btn border-0 bg-sky-400"
                onClick={() => {
                  onScore({ team, name: LINE_ROBADO });
                }}
              >
                ROBADO
              </label>
            </div>
          </div>
          <div>
            <div className="divider">SCRUM</div>
            <div className="btn-group w-full">
              <label
                htmlFor={"points_modal_" + team}
                className="btn w-1/3 border-0 bg-green-400"
                onClick={() => {
                  onScore({ team, name: SCRUM_BUENO });
                }}
              >
                BUENO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn w-1/3 border-0 bg-red-400"
                onClick={() => {
                  onScore({ team, name: SCRUM_PERDIDO });
                }}
              >
                PERDIDO
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn w-1/3 border-0 bg-sky-400"
                onClick={() => {
                  onScore({ team, name: SCRUM_ROBADO });
                }}
              >
                ROBADO
              </label>
            </div>
          </div>
          <div>
            <div className="divider">INFRACCIONES A FAVOR</div>
            <div className="btn-group w-full">
              <label
                htmlFor={"points_modal_" + team}
                className="btn w-1/2 border-0 bg-gray-400"
                onClick={() => {
                  onScore({ team, name: PENAL });
                }}
              >
                penal
              </label>
              <label
                htmlFor={"points_modal_" + team}
                className="btn w-1/2 border-0 bg-gray-400"
                onClick={() => {
                  onScore({ team, name: FREE_KICK });
                }}
              >
                free kick
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Points);
