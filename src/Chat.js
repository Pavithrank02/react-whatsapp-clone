import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import { useEffect, useState } from "react";
import { AttachFile } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if(roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))

    }

  }, [roomId])
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("dd", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name"> pavi</span>
          Hey Guys
          <span className="chat__timestamp">3:15</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a message..."
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
          <MicIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
