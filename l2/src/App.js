import React from "react";
import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const [flag, setFlag] = useState("flag2");
  useEffect(() => {}, []);
  if (1) {
    return <></>;
  } else {
      return (
        <div className="App">
          <h1>Your flag for level 2 is {flag}</h1>
        </div>
      );
  }
}
