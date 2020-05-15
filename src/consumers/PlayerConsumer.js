import React, { Component } from 'react';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants/index'
import { connect } from 'react-redux'

class PlayerConsumer extends Component {

    state = {
        gameState: null
    }

    handleReceived = (message) => {
        if (message) {
            console.log(message)
            this.setState({
                players: message
            })
        }
    }

    renderPlayers = () => {
        console.log('player consumer state:', this.state)
        return  this.state.players.map(player => {
            console.log('player: ', player)
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