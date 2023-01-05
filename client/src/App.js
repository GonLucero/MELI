import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./Global.css";
import Detail from './Components/Detail/Detail';
import ResultsView from "./Components/Results/ResultsView";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items/:id" element={<Detail/>}/>
          <Route exact path="/items" element={<ResultsView/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
