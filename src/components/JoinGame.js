import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../constants/index'
import { fetchCurrentUser } from '../actions/index'
import PlayerConsumer from '../consumers/PlayerConsumer'

class JoinGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            // user: props.loggedInUser.user,
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
    }

    render() {
        return (
            <div>
                <h3>Join Game</h3>
                { this.state.hasJoined ?
                <PlayerConsumer inviteKey={this.state.key}/>
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

export default connect(mapStateToProps, { fetchCurrentUser })(JoinGame)