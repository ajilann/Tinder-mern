import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

export default function ChatScreen() {
    const [input, setInput] = useState('');
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
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input }]);
        setInput("");
    }
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

            <form className="chatScreen__input">
             <input 
             value = {input}
             onChange={e => setInput(e.target.value)}
             className="chatScreen__inputField"
             placeholder=" Type a message..."
             type="text" />
             <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>   
            </form>   
    
        </div>
    )
}
