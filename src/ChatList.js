import React from 'react'
import Chat from './Chat';


function ChatList() {
    return (
        <div className="chatList">
            <Chat
            name="Sarah"
            message="Hi! How are you?"
            timestamp="40 seconds ago"
            profilePic="https://i.insider.com/5e70dfba235c18557e0f78c6?width=1095&format=jpeg"/>
            <Chat
            name="Ellen"
            message="Where were you?"
            timestamp="10 minutes ago"
            profilePic="https://pyxis.nymag.com/v1/imgs/01d/193/9645d162e7ca8bd070651477e8e91bb092-27-ellen-degeneres.rsquare.w1200.jpg"/>
            <Chat
            name="Sandra"
            message="When can we meet?"
            timestamp="20 minutes ago"
            profilePic="https://media.gettyimages.com/photos/sandra-bullock-attends-the-new-york-special-screening-of-the-netflix-picture-id1074346390?s=612x612"/>
            <Chat
            name="Natasha"
            message="Whatssup?"
            timestamp="40 minutes ago"
            profilePic="https://www.maxim.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Ch_406%2Cq_auto:good%2Cw_620/MTM1MTQyOTY1OTYyMzgxNzkw/natasha-romanoff-aka-black-widow-played-by-scarlett-johansson.jpg"/>
        </div>
    )
}

export default ChatList
