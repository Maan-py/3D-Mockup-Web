import { useState } from "react";
import Viewer from "./components/Viewer";
import RightSection from "./components/RightSection";

function App() {
  const [color, setColor] = useState("white");
  const [model, setModel] = useState("door");

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen bg-slate-800">
      <Viewer color={color} model={model} />
      <RightSection setColor={setColor} setModel={setModel} />
    </div>
  );
}

export default App;
