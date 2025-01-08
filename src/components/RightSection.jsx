const RightSection = ({ setColor }) => {
  return (
    <div className="text-white mr-5 basis-1/4 p-10">
      <h1>3D Door Model Designer</h1>
      <p>Colors : </p>
      <div className="flex gap-4">
        <button onClick={() => setColor("red")} className="w-10 h-10 bg-red-500 border-2 border-white"></button>
        <button onClick={() => setColor("yellow")} className="w-10 h-10 bg-yellow-500 border-2 border-white"></button>
        <button onClick={() => setColor("green")} className="w-10 h-10 bg-green-500 border-2 border-white"></button>
        <button onClick={() => setColor("blue")} className="w-10 h-10 bg-blue-500 border-2 border-white"></button>
        <button onClick={() => setColor("orange")} className="w-10 h-10 bg-orange-500 border-2 border-white"></button>
        <button onClick={() => setColor("white")} className="w-10 h-10 bg-white border-2 border-white"></button>
      </div>
    </div>
  );
};

export default RightSection;
