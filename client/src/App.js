import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./Styles/Global.css";
import Front from './Components/Front/Front';
import ResultsView2 from "./Components/Results/ResultsView2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/items/:id" element={<Front/>}/>
          <Route exact path="/items" element={<ResultsView2/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
