import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
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
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(this.state)
        }
    
    
        fetch('http://localhost:3000/api/v1/login', reqObj)
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
                <h3>Sign in</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
                    <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
                    <input type='submit' value='login' />
                </form>
                <a href='/create-account'>Create New Account</a>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: (user) => {
            dispatch(loginSuccess(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)