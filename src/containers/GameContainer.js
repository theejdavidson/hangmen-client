import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'


class GameContainer extends Component {
    renderPlayerComponents = () => {
        const currentGameUser = this.props.gameState.game_users.find(currentGameUser => currentGameUser.user_id === this.props.loggedInUser.user.id)
        return this.props.gameState.users.map(targetUser => {
            const targetGameUser = this.props.gameState.game_users.find(targetGameUser => targetGameUser.user_id === targetUser.id)
            const targetGuesses = this.props.gameState.game_guesses.filter(guess => guess.target_game_user_id === targetGameUser.id)
            return <Col key={`PlayerContainerCol_${targetGameUser.id}`}><PlayerContainer targetUsername={targetUser.username} targetGameUser={targetGameUser} currentGameUser={currentGameUser} targetGuesses={targetGuesses}/></Col>
        })
    }

    renderUsers = () => {
    return this.props.gameState.users.map(user => <ListGroup.Item key={`UserListItem_${user.id}`}>{user.username}</ListGroup.Item>)
    }

    evaluateGameStatus = () => {
        if(!this.props.gameState) {
            return <h1>Joining Game</h1>
        } else if (this.props.gameState.status === 'PLAYERS_JOINING') {
            return <div>
            <h1>Waiting for Host to start game</h1>
            <ListGroup variant="flush">{this.renderUsers()}</ListGroup>
            </div>
        } else if(this.props.gameState.status === 'IN_PROGRESS') {
            return this.renderPlayerComponents()
        } else if(this.props.gameState.status === 'FINISHED') {
            const remainingGameUser = this.props.gameState.game_users.find(gameUser => gameUser.limbs < 6)
            const winningUser = this.props.gameState.users.find(user => remainingGameUser.user_id === user.id)
            return <div>
                <h2>Game Finished!</h2>
                <h2>Winner:</h2>
                <h1>{winningUser.username}</h1>
            </div>
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    {this.evaluateGameStatus()}
                    </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        gameState: state.game.gameState
    }
}

export default connect(mapStateToProps)(GameContainer)