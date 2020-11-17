import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

export default function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/02/916920-ellendegeneres-quit-tvshow.jpg",
            message: "whats up"
        },
        {
            name: "Ellen",
            image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/02/916920-ellendegeneres-quit-tvshow.jpg",
            message: "How's it going"
        },
        {
            message: "Hi, how are you Ellen"
        },
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 11/10/20</p>
           {messages.map((message) => (
               message.name ? (
                <div className="chatScreen__message">
                <Avatar className="chatScreen__image"
                alt={message.name}
                src={message.image}
                />
                <p className="chatScreen__text">{message.message}</p>
                </div>    
               ) : (
               <div className="chatScreen__message">
                   <p className="chatScreen__textUser">{message.message}</p>
                   </div>
                )
           ))} 
        </div>
    )
}
