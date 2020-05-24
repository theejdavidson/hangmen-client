import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GameContainer extends Component {
    renderPlayerComponents = () => {
        const currentGameUser = this.props.gameState.game_users.find(currentGameUser => currentGameUser.user_id === this.props.loggedInUser.user.id)
        return this.props.gameState.users.map(targetUser => {
            const targetGameUser = this.props.gameState.game_users.find(targetGameUser => targetGameUser.user_id === targetUser.id)
            const targetGuesses = this.props.gameState.game_guesses.filter(guess => guess.target_game_user_id === targetGameUser.id)
            return <Col key={`PlayerContainerCol_${targetGameUser.id}`}><PlayerContainer targetUsername={targetUser.username} targetGameUser={targetGameUser} currentGameUser={currentGameUser} targetGuesses={targetGuesses}/></Col>
        })
    }

    render() {
        return(
            <Container fluid>
                <Row>
                { (this.props.gameState && this.props.gameState.game_users) ? this.renderPlayerComponents() : <h1>Waiting for Host to start game</h1>}
                </Row>
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