import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <div className="app__body">
          <BrowserRouter>
            <Routes>
              <Route exact path='/app' element={<Sidebar />}>
              </Route>
              <Route exact path='/'>
                <h1> Home Screen</h1>
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
