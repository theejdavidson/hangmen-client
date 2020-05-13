import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index';

class CreateUser extends React.Component {
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
          body: JSON.stringify({
              user: {
                  username: this.state.username,
                  password: this.state.password
                }
            })
        }
    
    
        fetch('http://localhost:3000/api/v1/users', reqObj)
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
                <h3>Creat New Account</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
                    <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
                    <input type='submit' value='login' />
                </form>
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

export default connect(null, mapDispatchToProps)(CreateUser)