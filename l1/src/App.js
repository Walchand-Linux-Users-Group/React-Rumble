
import './App.css';

import { useEffect, useState } from 'react';
function App() {
  const [flag, setFlag] = useState("flag1");
  useEffect(()=>{
    
  },[])
  return (
    <div className="App" style={{display:"none"}}>
      <h1>Your flag for level 1 is {flag}</h1>
    </div>
  );
}

export default Ap;
