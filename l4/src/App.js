import React from "react";
import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const [flag, setFlag] = useState("flag3");
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Your flag for level 3 is {flag}</h1>
    </div>
  );
}

export default App;
