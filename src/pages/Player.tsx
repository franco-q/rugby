import { ReactNode, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

const Player = () => {
  const ref = useRef<any>();
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);

  const handleSeekMouseDown = () => {};

  const handleSeekChange = (e) => {
    ref.current.seekTo(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = () => {};

  return (
    <div className="flex">
      <div>
        <div className="mb-3">
          <ReactPlayer
            ref={ref}
            url="https://www.youtube.com/watch?v=Wfd4ANZQG9I"
            playing={playing}
            config={{
              playerVars: {
                showinfo: 0,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                fs: 0,
                cc_load_policy: 0,
              },
            }}
          />
        </div>
        <div className="flex items-center">
          <button
            aria-label="circle button component"
            className="btn btn-circle"
            onClick={() => setPlaying(!playing)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="inline-block h-7 w-7 fill-current"
            >
              <path d="M18.3 36.4q-.75.5-1.525.05Q16 36 16 35.1V12.6q0-.9.775-1.35.775-.45 1.525.05L36 22.6q.7.45.7 1.25T36 25.1Z" />
            </svg>
          </button>
          <div className="pl-3 flex-grow">
            <input
              type="range"
              className="progress"
              min={0}
              max={0.999999}
              step="any"
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
