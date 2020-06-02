import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../constants/index'
import { fetchCurrentUser, setInviteKey, setGuessWord, clearGameState } from '../actions/index'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import GuessWord from './GuessWord'
import {words} from '../wordlist'

class JoinGame extends Component {
    constructor(props) {
        super(props)
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

    validateWord = () => {
        if(words.includes(this.state.guessWord.toLowerCase())) {
            console.log('the word is valid')
        } else {
            console.log('the word is not valid')
        }
    }

    render() {
        return (
            <div>
                <h1>Join Game</h1>
                <Form onSubmit={this.handleSubmit}>
                        <Form.Row className="justify-content-center p-2">
                            <Form.Label column='md' md={2}>Invite Key</Form.Label>
                            <Col sm={4}>
                            <Form.Control required name={'key'} onChange={this.handleInputChange} value={this.state.key} placeholder='Paste Invite Key'/>
                            </Col>
                        </Form.Row>
                        <Form.Row className="justify-content-center p-2">
                            <Form.Label column='md' md={2}>Guess Word</Form.Label>
                            <Col sm={4}>
                                <Form.Control required name={'guessWord'} onChange={this.handleInputChange} value={this.state.guessWord} placeholder='Enter Guess Word'/>
                            </Col>
                        </Form.Row>
                    <Button type='submit'>Join Game</Button>
                </Form>
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