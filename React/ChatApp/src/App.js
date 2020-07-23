import React from 'react';
import Chat from './Components/Chat';
import UserName from './Components/userName';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <Router>

      <div>
        <Switch>

          <Route exact path='/'>
            <UserName />
          </Route>

          <Route path='/chat'>
            <Chat />
          </Route>
          
        </Switch>
      </div>
      
    </Router>
    )
  }
}

export default App;
