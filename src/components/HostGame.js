import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser, setInviteKey, setGuessWord } from '../actions/index'
import { API_ROOT, HEADERS } from '../constants/index'
import GuessWord from './GuessWord'
class HostGame extends Component {

    state = {
        gameCreated: false,
        guessWord: ''
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    createGame = (e) => {
        e.preventDefault()
        const inviteKey = Math.random().toString(36).substring(2)
        fetch(`${API_ROOT}/api/v1/games`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                inviteKey: inviteKey,
                guessWord: this.state.guessWord,
                user: this.props.loggedInUser.user
            })
        }).then(resp => {
            console.log(resp)
            if(resp.ok) {
                this.props.setGuessWord(this.state.guessWord)
                this.props.setInviteKey(inviteKey)
                this.setState({gameCreated: true})
            }
            })
    }

    render() {
        return (
            <div>
                <h1>Host Game</h1>
                <form onSubmit={this.createGame}>
                    <input name={'guessWord'} onChange={this.handleInputChange} value={this.state.guessWord} placeholder='Enter Guess Word'/><br/>
                    <input type='submit' value='Create Game' />
                </form>
                {this.state.gameCreated ? 
                <div>
                    <h2>Game Created!</h2><br/>
                    <h3>Share this invite key so others can join: {localStorage.inviteKey}</h3>
                </div>
                : null}

                {(this.props.gameState && this.props.gameState.users)
                    ? console.log('Users: ', this.props.gameState.users)
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        gameState: state.game.gameState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        setInviteKey: (inviteKey) => dispatch(setInviteKey(inviteKey)),
        setGuessWord: (guessWord) => dispatch(setGuessWord(guessWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostGame)