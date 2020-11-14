import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

export default function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://static.nexilia.it/giornalettismo/2020/07/MUSK-576x360.jpg"
        },

        {
            name: "Jeff Bazoz",
            url: "https://assets.entrepreneur.com/slideshow/20190502145947-bezos-4.jpeg?width=600"
        }
]);

    const swiped = (directon, nameToDelete) => {
        console.log("removing: " + nameToDelete);
       // setLastDirection(directon);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className=" tinderCards">
            <div className="tinderCards__cardContainer">
           {people.map((person) => (
             <TinderCard
             className="swipe"
             key={person.name}
             preventSwipe ={["up", "down" ]}
             onSwipe={(dir) => swiped(dir, person.name)}
             onCardLeftScreen={() => outOfFrame(person.name)}
             >
              <div style={{ backgroundImage: `url(${person.url})`}}
              className = "card"
              >
                <h3>{person.name}</h3>
                </div>   
             </TinderCard>
           ))} 
        </div>
        </div>
    );
}
