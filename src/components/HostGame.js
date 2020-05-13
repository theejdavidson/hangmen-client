import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/index'
import { API_ROOT, HEADERS } from '../constants/index'
import { ActionCableConsumer } from 'react-actioncable-provider';

class HostGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
        users: [],
        key: '',
        }
    }

    componentDidMount() {
        this.generateKey()
    }

    componentDidUpdate() {
        if(this.props.loggedInUser && this.state.users.length < 1) {
            this.addUser(this.props.loggedInUser)
        } else if (this.props.loggedInUser && this.state.users.length === 1) {
            console.log(this.state.users)
            this.createGame()
        }
    }

    addUser = (user) => {
        this.setState(({users}) => ({
            users: [...users, user]
        }))
    }

    generateKey = () => {
        const key = Math.random().toString(36).substring(2)
        this.setState({
            key: key
        })
    }

    createGame = () => {
        fetch(`${API_ROOT}/api/v1/games`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                game: {
                    key: this.state.key,
                    users: this.state.users
                }
            })
        }).then(resp => console.log(resp.ok))
    }

    renderUsers = () => {
        return this.state.users.map(user => <li key={user.user.id}>{user.user.username}</li>)
    }

    handleReceived = (message) => {
        console.log(message)
    }

    render() {
        return (
            <div>
                <h3>Invite Key: {this.state.key}</h3>
                <ActionCableConsumer
                    channel='GamesChannel'
                    onRecieved={this.handleReceived}
                    >
                </ActionCableConsumer>
                <ul>
                    { (this.state.users.length > 0) ?
                    this.renderUsers()
                    :
                    <li>Loading</li>
                    }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCurrentUser: () => dispatch(fetchCurrentUser()),
//         createGame: () => dispatch(createGame())
//     }
// }

export default connect(mapStateToProps, { fetchCurrentUser })(HostGame)