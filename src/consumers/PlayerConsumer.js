import React, { Component } from 'react';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants/index'

class PlayerConsumer extends Component {

    state = {
        players: []
    }

    handleReceived = (message) => {
        if (message) {
            console.log(message)
            this.setState(({players}) => ({
                players: [...players, message.game.users]
            }))
        }
    }

    renderPlayers = () => {
        console.log(this.state.players)
        return  this.state.players.map(player => {
            return <li>username: {player['username']}</li>
        })
    }

    render() {
        return (
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: this.props.inviteKey}}
                onReceived={this.handleReceived}
                onConnected={this.handleReceived}
                >
                <ul>
                    {(this.state.players.length > 0) ? this.renderPlayers() : <li>waiting for players to join</li>}
                </ul>
                </ActionCableConsumer>
        )}
}

export default PlayerConsumer