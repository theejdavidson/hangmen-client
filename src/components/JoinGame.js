import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../constants/index'
import { ActionCableConsumer } from 'react-actioncable-provider';

class JoinGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            user: props.loggedInUser.user
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
          body: JSON.stringify(this.state)
        }
    
        fetch(`${API_ROOT}/api/v1/login`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          if(data.error) {
            alert(data.error)
          } else {
            localStorage.setItem('token', data.token)
            this.props.loginSuccess(data)
            console.log(data)
            this.props.history.push('/join-game')
          }
        })
    }

    render() {
        return (
            <div>
                <h3>Join Game</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name={'key'} onChange={this.handleInputChange} value={this.state.key} />
                    <input type='submit' value='Join' />
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

export default connect(mapStateToProps)(JoinGame)