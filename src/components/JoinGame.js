import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../constants/index'
import { fetchCurrentUser, setInviteKey, setGuessWord, clearGameState } from '../actions/index'
import Button from 'react-bootstrap/Button'
// import PlayerConsumer from '../consumers/PlayerConsumer'
// import GuessWord from './GuessWord'

class JoinGame extends Component {
    constructor(props) {
        super(props)
        // props.clearGameState()
        this.state = {
            key: '',
            guessWord: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify({
              inviteKey: this.state.key,
              user: this.props.loggedInUser.user,
              guessWord: this.state.guessWord
          })
        }
        fetch(`${API_ROOT}/api/v1/join`, reqObj)
        .then(resp => {
            if(resp.ok) {
                this.props.setInviteKey(this.state.key)
                this.props.setGuessWord(this.state.guessWord)
                this.props.history.push('/gallows')
            }
            })
    }

    render() {
        return (
            <div>
                <h1>Join Game</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name={'key'} onChange={this.handleInputChange} value={this.state.key} placeholder='Paste Invite Key'/><br/>
                    <input name={'guessWord'} onChange={this.handleInputChange} value={this.state.guessWord} placeholder='Enter Guess Word'/><br/>
                    <input type='submit' value='Join Game' />
                </form>
                <a href='/host-game'>Host Game</a>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        clearGameState: () => dispatch(clearGameState()),
        setInviteKey: (inviteKey) => dispatch(setInviteKey(inviteKey)),
        setGuessWord: (guessWord) => dispatch(setGuessWord(guessWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)