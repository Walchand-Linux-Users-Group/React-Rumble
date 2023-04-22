import React from "react";
import "./App.css";

import { useEffect, useState } from "react";
function Part1() {
  const [flag, setFlag] = useState("flag3");
  useEffect(() => {}, []);

  return (
    <>
      <div className="App">
        {setFlag("2")}
        <h1>Part1 of your flag for level 3 is {flag}</h1>
      </div>
    </>
  );
}

export default Part1;
