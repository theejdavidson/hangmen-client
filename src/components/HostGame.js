import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser, setInviteKey } from '../actions/index'
import { API_ROOT, HEADERS } from '../constants/index'
import GuessWord from './GuessWord'
class HostGame extends Component {
    constructor() {
        super()
        this.state = {
        users: [],
        }
    }

    componentDidMount() {
        this.generateKey()
    }

    componentDidUpdate() {
        if(this.props.loggedInUser) {
            // this.addUser(this.props.loggedInUser)
            this.createGame()
        }
    }

    // addUser = (user) => {
    //     this.setState(({users}) => ({
    //         users: [...users, user]
    //     }))
    // }

    generateKey = () => {
        const key = Math.random().toString(36).substring(2)
        this.props.setInviteKey(key)
    }

    createGame = () => {
        fetch(`${API_ROOT}/api/v1/games`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                game: {
                    key: this.state.key,
                    users: this.props.loggedInUser.user
                }
            })
        })//.then(resp => resp.json())
       // .then(game => console.log(game))
    }

    render() {
        return (
            <div>
                <h3>Invite Key: {this.props.game.inviteKey}</h3>
                {
                (this.props.game.inviteKey !== '' && this.props.loggedInUser) ?
                <GuessWord userId={this.props.loggedInUser.user.id}/>
                :
                <h4>Generating Game</h4>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        setInviteKey: (inviteKey) => dispatch(setInviteKey(inviteKey))
        // createGame: () => dispatch(createGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostGame)