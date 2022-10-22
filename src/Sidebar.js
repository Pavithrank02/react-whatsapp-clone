import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
					<Avatar />
					<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />	
					</IconButton>
					<IconButton>	
					<ChatIcon />
					</IconButton>
					<IconButton>
					 <MoreVertIcon />
					 </IconButton>
				
						
					</div>
				</div>
				<div className="sidebar__search">
					<div className='sidebar__searchContainer'>
					<SearchIcon />
					<input placeholder='Search or start new chat' type='text' />
					</div>
				</div>
				<div className="sidebar__chats">
				<SidebarChat addNewChat/>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				

				</div>        
    </div>
  )
}

export default Sidebar