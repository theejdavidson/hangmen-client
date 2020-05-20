import React, { Component } from 'react';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants/index'
import { connect } from 'react-redux'
import { setGameState } from '../actions/index'

class PlayerConsumer extends Component {

    handleConnected = (message) => {
        console.log("on connected:", message)
        if (message) {
            this.props.setGameState(message)
        }
    }

    handleReceived = (message) => {
        console.log("on received:", message)
        if (message) {
            this.props.setGameState(message)
        }
    }

    // renderPlayers = () => {
    //     console.log('player consumer state:', this.state)
    //     return  this.state.gameState.game.users.map(player => {
    //         console.log('player: ', player)
    //         return <li key={player['id']}>username: {player['username']}</li>
    //     })
    // }

    render() {
        // let storestate = `${JSON.stringify(this.props.gameState, null, 2)}\n${this.props.inviteKey}`
        return (
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: localStorage.inviteKey}}
                onReceived={this.handleReceived}
                onConnected={this.handleConnected}
                >
                    {/* <h3>store state: {storestate}</h3> */}
                <ul>
                    {/* {(this.state.gameState) ? this.renderPlayers() : <li>waiting for players to join</li>} */}
                </ul>
                </ActionCableConsumer>
        )}
}

const mapStateToProps = state => {
    return {
        userId: state.loggedInUser.user.id,
        inviteKey: state.game.inviteKey,
        gameState: state.game.gameState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGameState: (gameState) => dispatch(setGameState(gameState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerConsumer)