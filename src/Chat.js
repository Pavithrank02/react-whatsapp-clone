import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import './Chat.css';
import { useEffect, useState } from 'react';
import { AttachFile } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Chat() {
    const [seed, setSeed] =  useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
      },[])
  return (
    <div className='chat'>
    <div className='chat__header'>
    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
    <div className='chat__headerInfo'>
    <h3>Room Name</h3>
    <p>Last seen at...</p>
    </div>
    <div className='chat__headerRight'>
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
    <div className='chat__body'>

    </div>
    <div className='chat__footer'>
    </div>
</div>
  )
}

export default Chat;