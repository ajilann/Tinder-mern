import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

export default function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Elon Musk"
            message="Ola!"
            timestamp="40 seconds ago"
            profilePic="https://static.nexilia.it/giornalettismo/2020/07/MUSK-576x360.jpg"
            />
             <Chat 
            name="Sarah"
            message="Yo whats up!"
            timestamp="5 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sarah_Shahi_cropped_and_retouched.jpg/1200px-Sarah_Shahi_cropped_and_retouched.jpg"
            />
             <Chat 
            name="Jeff Bezuz"
            message="Yo whats up!"
            timestamp="10 minutes ago"
            profilePic="https://assets.entrepreneur.com/slideshow/20190502145947-bezos-4.jpeg?width=600"
            />
             <Chat 
            name="Jack"
            message="Hey! how are you"
            timestamp="40 minutes ago"
            profilePic="https://m.media-amazon.com/images/M/MV5BNDc5NjRmNDMtZjE1ZS00YjZlLTk2MGEtZmY4Yzk3Y2VmYjU3XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
            />
             <Chat 
            name="Ellen"
            message= "whats up"
            timestamp="2 hours ago"
            profilePic="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/02/916920-ellendegeneres-quit-tvshow.jpg"
            />
        </div>
    )
}
