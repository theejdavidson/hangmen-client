import React, { Component } from 'react';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants/index'
import { connect } from 'react-redux'

class PlayerConsumer extends Component {

    state = {
        gameState: null
    }

    handleConnected = (message) => {
        console.log("on connected:", message)
        if (message) {
            this.setState({
                gameState: message
            })
        }
    }

    handleReceived = (message) => {
        console.log("on received:", message)
        if (message) {
            this.setState({
                gameState: message
            })
        }
    }

    renderPlayers = () => {
        console.log('player consumer state:', this.state)
        return  this.state.gameState.game.users.map(player => {
            console.log('player: ', player)
            return <li key={player['id']}>username: {player['username']}</li>
        })
    }

    render() {
        console.log('PlayerConsumer: render', this.state)
        let mystate = `${JSON.stringify(this.state.gameState, null, 2)}\n${this.props.inviteKey}`
        return (
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: this.props.inviteKey}}
                onReceived={this.handleReceived}
                onConnected={this.handleConnected}
                >
                    <h3>{mystate}</h3>
                <ul>
                    {(this.state.gameState) ? this.renderPlayers() : <li>waiting for players to join</li>}
                </ul>
                </ActionCableConsumer>
        )}
}

const mapStateToProps = state => {
    return {
        userId: state.loggedInUser.user.id,
        inviteKey: state.game.inviteKey
    }
}

export default connect(mapStateToProps)(PlayerConsumer)