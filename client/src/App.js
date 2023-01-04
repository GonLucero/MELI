import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./Styles/Global.css";
import Front from './Components/Front/Front';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/items/:id" element={<Front/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
