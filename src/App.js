import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import JoinGame from './components/JoinGame'
import HostGame from './components/HostGame'
import NavBar from './components/NavBar'
import { API_WS_ROOT } from './constants/index'
import './App.css';

function App() {
  return (
    // <ActionCableProvider url={`${API_WS_ROOT}?token=${localStorage.getItem('token')}`} >
    <ActionCableProvider url={API_WS_ROOT} >
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          {/* <Route path='/' component={NavBar}/> */}
          <Route path='/login' component={Login}/>
          <Route path='/create-account' component={CreateUser}/>
          <Route path='/join-game' component={JoinGame}/>
          <Route path='/host-game' component={HostGame}/>
        </Switch>
      </div>
      </BrowserRouter>
    </ActionCableProvider>
  );
}

export default App;
