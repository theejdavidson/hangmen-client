import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/index'

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
        if(this.props.loggedInUser && this.state.users < 1) {
            this.addUser(this.props.loggedInUser.user)
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

    renderUsers = () => {
        return this.state.users.map(user => <li key={user.id}>{user.username}</li>)
    }

    render() {
        return (
            <div>
                <h3>Invite Key: {this.state.key}</h3>
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

export default connect(mapStateToProps, { fetchCurrentUser })(HostGame)