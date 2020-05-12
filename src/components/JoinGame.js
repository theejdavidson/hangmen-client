import React, { Component } from 'react'
import { connect } from 'react-redux'

class JoinGame extends Component {
    render() {
        return (
            <div>
                Join Game
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