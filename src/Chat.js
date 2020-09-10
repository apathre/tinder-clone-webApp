import React from 'react'
import { Avatar } from '@material-ui/core'
import './Chat.css';
import { Link } from 'react-router-dom';


function Chat({name,message,timestamp,profilePic}) {
    return (
        <div>
            <Link to={`chat/${name}`}>
            <div className="chat">
            <Avatar className="chat_image" alt={name} src={profilePic}/>
            <div className="chat_details">
                <h4>{name}</h4>
    <p>{message}</p>
            </div>
    <p>{timestamp}</p>
    </div>
    </Link>
        </div>
    )
}

export default Chat
