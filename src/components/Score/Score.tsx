import { useEffect, useState } from "react";

const Score = ({ onScore, home, away }) => {
  console.log(home);

  return (
    <div className="grid grid-cols-2 gap-2 mb-2">
      <div className="text-center font-mono text-6xl">
        <span>{home.reduce((a, b) => parseInt(a) + parseInt(b), 0)}</span>
      </div>
      <div className="text-center font-mono text-6xl">
        <span>{away.reduce((a, b) => parseInt(a) + parseInt(b), 0)}</span>
      </div>
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "HOME", value: 5, name: "try" });
            }}
          >
            try
          </button>
          <button
            disabled={home[0] !== 5}
            className="btn"
            onClick={() => {
              onScore({ team: "HOME", value: 2, name: "conv." });
            }}
          >
            conv.
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "HOME", value: 7, name: "try penal" });
            }}
          >
            try penal
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "HOME", value: 3, name: "drop" });
            }}
          >
            drop
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "HOME", value: 3, name: "penal" });
            }}
          >
            penal
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "AWAY", value: 5, name: "try" });
            }}
          >
            try
          </button>
          <button
            disabled={away[0] !== 5}
            className="btn"
            onClick={() => {
              onScore({ team: "AWAY", value: 2, name: "conv." });
            }}
          >
            conv.
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "AWAY", value: 7, name: "try penal" });
            }}
          >
            try penal
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "AWAY", value: 3, name: "drop" });
            }}
          >
            drop
          </button>
          <button
            className="btn"
            onClick={() => {
              onScore({ team: "AWAY", value: 3, name: "penal" });
            }}
          >
            penal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
