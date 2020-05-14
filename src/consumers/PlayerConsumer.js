import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants/index'

class PlayerConsumer extends Component {

    state = {
        guess_word: ''
    }

    handleReceived = (message) => {
        console.log(message)
    }

    handleClick = e => {
        e.preventDefault()
        console.log('props', this.props)
        console.log('state', this.state)
        this.updateGuessWord()
    }

    updateGuessWord = () => {
        fetch(`${API_ROOT}/api/v1/add-guess-word`, {
            method: 'PATCH',
            headers: HEADERS,
            body: JSON.stringify({
                invite_key: this.props.inviteKey,
                user_id: this.props.userId,
                guess_word: this.state.guess_word
            })
        })
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: this.props.inviteKey}}
                onReceived={this.handleReceived}
                onConnected={this.handleReceived}
                >
                </ActionCableConsumer>
                <input name={'guess_word'} onChange={this.handleInputChange} value={this.state.guess_word}/>
                <button onClick={this.handleClick}>Ready!</button>
            </div>
        )}
}

export default PlayerConsumer