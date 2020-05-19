import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class GameContainer extends Component {
    renderPlayerComponents = () => {
        return this.props.gameState.game.users.map(user => {
            const gameUser = this.props.gameState.game.game_users.find(gameUser => gameUser.user_id === user.id)
            const gameUserState = {guessWord: gameUser.guess_word, limbs: gameUser.limbs}
            return <PlayerContainer username={user.username} gameUserState={gameUserState}/>
        })
    }

    render() {
        return(
            <Container fluid='true'>
                { this.renderPlayerComponents() }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loggedInUser: state.loggedInUser,
        gameState: state.game.gameState
    }
}

export default connect(mapStateToProps)(GameContainer)