import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/index';

class NavBar extends Component {
    logoutUser = () => {
        console.log('logged out user')
        localStorage.removeItem('token')
        localStorage.removeItem('inviteKey')
        this.props.logout()
    }

    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>Hangmen</Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    {this.props.loggedInUser ?
                    <>
                    <Navbar.Text>{this.props.loggedInUser.user.username}</Navbar.Text>
                    <LinkContainer to="/join-game">
                        <Nav.Link>Join Game</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/host-game">
                        <Nav.Link>Host Game</Nav.Link>
                    </LinkContainer>
                    <LinkContainer  to="/login" onClick={this.logoutUser}>
                        <Nav.Link>Log out</Nav.Link>
                    </LinkContainer>
                    </>
                    :
                    <>
                    <LinkContainer  to="/login" onClick={this.logoutUser}>
                        <Nav.Link>Log in</Nav.Link>
                    </LinkContainer>
                    <LinkContainer  to="/create-account" onClick={this.logoutUser}>
                        <Nav.Link>Create account</Nav.Link>
                    </LinkContainer>
                    </>
                    }
                </Navbar.Collapse>
            </Navbar>
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
      logout:  () => {
        dispatch(logout())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)