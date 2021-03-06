import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider'
import PlayerConsumer from './consumers/PlayerConsumer'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import JoinGame from './components/JoinGame'
import HostGame from './components/HostGame'
import GameContainer from './containers/GameContainer'
import NavBar from './components/NavBar'
import { API_WS_ROOT } from './constants/index'
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faCopy)

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
          <Route path='/gallows' component={GameContainer}/>
        </Switch>
      </div>
      </BrowserRouter>

      {(localStorage.inviteKey && props.loggedInUser) ? 
        <PlayerConsumer/> 
      : null}

    </ActionCableProvider>
  );
}
const mapStateToProps = state => {
  console.log('app state: ', state)
  return {
    loggedInUser: state.loggedInUser,
    inviteKey: state.game.inviteKey,
    gameState: state.game.gameState
  }
}
export default connect(mapStateToProps)(App);
