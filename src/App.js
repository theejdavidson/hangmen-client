import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider'
import PlayerConsumer from './consumers/PlayerConsumer'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import JoinGame from './components/JoinGame'
import HostGame from './components/HostGame'
import NavBar from './components/NavBar'
import { API_WS_ROOT } from './constants/index'
import { connect } from 'react-redux'
import './App.css';

const App = (props) => {
  return (
    <ActionCableProvider url={API_WS_ROOT} >
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/create-account' component={CreateUser}/>
          <Route path='/join-game' component={JoinGame}/>
          <Route path='/host-game' component={HostGame}/>
        </Switch>
      </div>
      </BrowserRouter>
      <h1>invite key: {props.inviteKey}</h1>
      {props.loggedInUser ? <h1>user: {props.loggedInUser.user.username}</h1> : null}

      {(props.loggedInUser && props.inviteKey !== '') ? <PlayerConsumer/> : null}
    </ActionCableProvider>
  );
}
const mapStateToProps = state => {
  console.log('app state: ', state)
  return {
    loggedInUser: state.loggedInUser,
    inviteKey: state.game.inviteKey
  }
}
export default connect(mapStateToProps)(App);
