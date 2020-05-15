import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../constants/index'

class GuessWord extends Component {
    state = {
        guess_word: ''
    }

    updateGuessWord = (e) => {
        e.preventDefault()
        console.log('props', this.props)
        console.log('state', this.state)
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
        return(
            <div>
                <input name={'guess_word'} onChange={this.handleInputChange} value={this.state.guess_word}/>
                <button onClick={this.updateGuessWord}>Ready!</button>
            </div>
        )
    }
}

export default GuessWord