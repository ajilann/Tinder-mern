import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import './App.css';
import Header from "./Header";
import SwipeButtons from './SwipeButtons';
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {

  return (
    <div className="App">
    <Router>
    <Switch>
      {/* individual Chats Screen */}
      <Route path="/chat/:person">
      <Header backButton="/chat"/>
        <ChatScreen />
        
      </Route>
      {/* Chats Screen */}
      <Route path="/chat">
      <Header backButton="/"/>
        <Chats />
      </Route>
    <Route path='/'>
    <Header />
    <TinderCards />
    <SwipeButtons />
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
