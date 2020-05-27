import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser, setInviteKey, setGuessWord, clearGameState } from '../actions/index'
import { API_ROOT, HEADERS } from '../constants/index'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class HostGame extends Component {

    constructor(props) {
        super(props)
        props.clearGameState()
        this.state = {
            gameCreated: false,
            guessWord: ''
        }
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

    renderUsers = () => {
    return this.props.gameState.users.map(user => <li key={user.id}>{user.username}</li>)
    }

    startGame = () => {
        console.log('START GAME')
        fetch(`${API_ROOT}/api/v1/start`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                gameId: this.props.gameState.id
            })
        })
        this.props.history.push('/gallows')
    }

    render() {
        return (
            <div>
                <h1>Host Game</h1>
                {this.state.gameCreated ? 
                <div>
                    <h2>Game Created!</h2><br/>
                    <h3>Share this invite key so others can join: {localStorage.inviteKey}</h3>
                </div>
                : <Form onSubmit={this.createGame}>
                    <Form.Row className="justify-content-center p-2">
                        <Form.Label column='md' md={2}>Guess Word</Form.Label>
                        <Col sm={4}>
                            <Form.Control required name={'guessWord'} onChange={this.handleInputChange} value={this.state.guessWord} placeholder='Enter Guess Word'/>
                        </Col>
                        <Button type='submit'>Create Game</Button>
                    </Form.Row>
                </Form>}

                {(this.props.gameState && this.props.gameState.users)
                    ? <div>
                        <h2>Joined Players</h2>
                        <ul>
                            {this.renderUsers()}
                        </ul>
                        <Button onClick={this.startGame}>Start Game</Button>
                    </div>
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
        clearGameState: () => dispatch(clearGameState()),
        setInviteKey: (inviteKey) => dispatch(setInviteKey(inviteKey)),
        setGuessWord: (guessWord) => dispatch(setGuessWord(guessWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostGame)