import React, { useState } from "react";

const colors = [
  { name: "Red", value: "red", className: "bg-red-500" },
  { name: "Fuchsia", value: "fuchsia", className: "bg-fuchsia-500" },
  { name: "Blue", value: "blue", className: "bg-blue-500" },
  { name: "Green", value: "green", className: "bg-green-500" },
  { name: "Yellow", value: "yellow", className: "bg-yellow-400" },
  { name: "Pink", value: "pink", className: "bg-pink-400" },
  { name: "Cyan", value: "cyan", className: "bg-cyan-400" },
  { name: "Orange", value: "orange", className: "bg-orange-400" },
  { name: "Purple", value: "purple", className: "bg-purple-500" },
  { name: "Lime", value: "lime", className: "bg-lime-400" },
  { name: "Teal", value: "teal", className: "bg-teal-400" },
];

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center text-white  gap-4 border border-white-700 rounded-xl p-4 mx-4 opacity-90 bg-white">
        {colors.map((col) => (
          <button
            key={col.value}
            className={`px-4 py-1 rounded ${col.className} text-white`}
            onClick={() => setColor(col.value)}
          >
            {col.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
