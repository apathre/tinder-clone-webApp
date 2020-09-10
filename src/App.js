import React from 'react';
import './App.css';
import Header from './Header.js';
import Cards from './Cards';
import SwipeButton from './SwipeButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChatList from './ChatList';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <ChatList/>
          </Route>
          <Route path="/">
          <Header/>
          <Cards/>
          <SwipeButton/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
