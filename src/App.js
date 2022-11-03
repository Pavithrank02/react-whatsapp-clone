import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
    {!user ? (
      <h1>Login</h1>
    ):}
      <div className="app__body">
      <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
