import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../constants/index'
import { fetchCurrentUser, setInviteKey } from '../actions/index'
import PlayerConsumer from '../consumers/PlayerConsumer'
import GuessWord from './GuessWord'

class JoinGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            hasJoined: false
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
              user: this.props.loggedInUser.user
          })
        }
        fetch(`${API_ROOT}/api/v1/join`, reqObj)
        .then(resp => {
            if(resp.ok) {
                this.props.setInviteKey(this.state.key)
                this.setState({ hasJoined: true })
            }
            })
    }

    render() {
        return (
            <div>
                <h3>Join Game</h3>
                { this.state.hasJoined ?
                <GuessWord userId={this.props.loggedInUser.user.id}/>
                :
                <form onSubmit={this.handleSubmit}>
                    <input name={'key'} onChange={this.handleInputChange} value={this.state.key} />
                    <input type='submit' value='Join' />
                </form>
                }
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
        setInviteKey: (inviteKey) => dispatch(setInviteKey(inviteKey))
        // createGame: () => dispatch(createGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)