import Dashboard from "@/components/Dashboard/Dashboard";
import Timeline from "@/components/Timeline/Timeline";
import Timer from "@/components/Timer/Timer";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

function App() {
  const options = [
    { text: "Register" },
    { text: "Choose plan" },
    { text: "Purchase" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Register" },
    { text: "Choose plan" },
    { text: "Purchase" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Register" },
    { text: "Choose plan" },
    { text: "Purchase" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
    { text: "Receive Product" },
  ];
  return (
    <div className="p-4 min-h-screen">
      <div className="gap-4 -mx-4 grid grid-flow-col h-full ">
        <div className="">
          <VideoPlayer />
          <Timer />
        </div>
        <Timeline />
        <div className="row-span-2">
          <Dashboard options={options} />
        </div>
      </div>
    </div>
  );
}

export default App;
