import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

    if (numberAllowed) str += num;
    if (charAllowed) str += symbols;

    let pass = "";
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-green-400">
        Password Generator
      </h1>

      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-grow p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={copyPassword}
            className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between items-center">
            <label>Password Length: {length}</label>
            <input
              type="range"
              min={4}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2"
            />
          </div>

          <div className="flex justify-between items-center">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>

          <div className="flex justify-between items-center">
            <label>Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
