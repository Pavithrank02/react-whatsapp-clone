import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
    {!user ? (
      <Login />
    ):(
      <div className="app__body">
      <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
      </div>
    )}
      
    </div>
  );
}

export default App;
