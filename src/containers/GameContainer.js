import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GameContainer extends Component {
    renderPlayerComponents = () => {
        return this.props.gameState.users.map(user => {
            const gameUser = this.props.gameState.game_users.find(gameUser => gameUser.user_id === user.id)
            const gameUserState = {guessWord: gameUser.guess_word, limbs: gameUser.limbs, gameUserId: gameUser.id}
            return <Col><PlayerContainer username={user.username} gameUserState={gameUserState}/></Col>
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