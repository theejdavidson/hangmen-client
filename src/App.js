import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
// import DeathRow from './containers/DeathRow'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import JoinGame from './components/JoinGame'
import HostGame from './components/HostGame'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        {/* <Route path='/' component={NavBar}/> */}
        <Route path='/login' component={Login}/>
        <Route path='/create-account' component={CreateUser}/>
        <Route path='/join-game' component={JoinGame}/>
        <Route path='/host-game' component={HostGame}/>

      {/* < DeathRow /> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
