import { useState } from "react";
import Viewer from "./components/Viewer";
import RightSection from "./components/RightSection";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen bg-slate-800">
      <Viewer color={color} />
      <RightSection setColor={setColor} />
    </div>
  );
}

export default App;
