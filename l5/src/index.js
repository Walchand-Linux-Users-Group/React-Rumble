import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Try from './TRY';
import IamtheAnswer from './IamtheAnswer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {usestate} from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const [flag,setFlag]=usestate("flag3");
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/try' element={<Try setFlag/>}/>
    <Route path='/answer' element={<IamtheAnswer flag/>}/>
    {/* <Route path=`${path}` element={}/> */}
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
