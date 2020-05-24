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

    render() {
        return (
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: localStorage.inviteKey}}
                onReceived={this.handleReceived}
                onConnected={this.handleConnected}
                >
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