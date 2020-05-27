import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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
            this.props.history.push('/join-game')
          }
        })
    }

    render() {
        return (
            <div>
                <h1>Creat New Account</h1>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Row className="justify-content-center p-2">
                  <Form.Label column='md' md={2}>Username</Form.Label>
                    <Col sm={4}>
                      <Form.Control required name={'username'} onChange={this.handleInputChange} value={this.state.username} placeholder='Enter Username'/>
                    </Col>
                  </Form.Row>
                  <Form.Row className="justify-content-center p-2">
                    <Form.Label column='md' md={2}>Password</Form.Label>
                    <Col sm={4}>
                    <Form.Control required name={'password'} onChange={this.handleInputChange} value={this.state.password} placeholder='Enter Password'/>
                    </Col>
                  </Form.Row>
                    <Button type='submit'>Create Account</Button>
                </Form>
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