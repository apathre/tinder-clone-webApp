import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import './ChatScreen.css';


function ChatScreen() {
    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([
        {
            name:"Ellen",
            message:"Good Work",
            profilePic:"https://www.maxim.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Ch_406%2Cq_auto:good%2Cw_620/MTM1MTQyOTY1OTYyMzgxNzkw/natasha-romanoff-aka-black-widow-played-by-scarlett-johansson.jpg"

        },
        {
            name:"Ellen",
            message:"Waiting for you!!",
            profilePic:"https://www.maxim.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Ch_406%2Cq_auto:good%2Cw_620/MTM1MTQyOTY1OTYyMzgxNzkw/natasha-romanoff-aka-black-widow-played-by-scarlett-johansson.jpg"
        },
        {
            message:"Will meet today"
        }
    ]);
    const handleSend=(e)=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("")

    }
    return (
        <div>
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You matched with Ellen on 10th August 2020</p>
            {messages.map(msg=>(
                (msg.name?
                   (<div className="chatScreen_messages">
                    <Avatar className="chat_image" alt={msg.name} src={msg.profilePic}/>
            <p className="chatScreen_text">{msg.message}</p>
            </div>)
                    :
                    (<div className="chatScreen_messages">
        
            <p className="chatScreen_userText">{msg.message}</p>
            </div>))
    ))}
        </div>
        <form className="chatScreen_form">
            <input 
            value={input}
            onChange={e=>setInput(e.target.value)}
            className="chatScreen_input"
            placeholder="Type a message here...">
            </input>
            <button
            onClick={handleSend}
            className="chatScreen_button">Send</button>

        </form>
        
        </div>
    );
}

export default ChatScreen
