import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Letterbox from '../components/Letterbox'
import Diagram from '../components/Diagram'
import { API_ROOT, HEADERS } from '../constants/index'
class PlayerContainer extends Component {

    guessWordArr = () => {
        return this.props.targetGameUser.guess_word.split('')
    }

    guessedLettersArr = () => {
        return this.props.targetGuesses.map(g => g.guess_letter)
    }

    guessWordBlanked = () => {
        return this.guessWordArr().map(l => {
            if(this.guessedLettersArr().includes(l)) {
                return l
            } else {
                return '_'
            }
        }).join(' ')
    }

    guessLetter = (letter) => {
        console.log('guessed letter: ', letter)
        fetch(`${API_ROOT}/api/v1/guess`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                guessLetter: letter,
                guesserGameUserId: this.props.currentGameUser.id,
                targetGameUserId: this.props.targetGameUser.id,
                gameId: this.props.currentGameUser.game_id
            })
        })
    }

    render() {
        return(
            <Col>
                <Container className="player-container">
                <Row className="justify-content-center">{this.props.targetUsername}</Row>
                <Row className="justify-content-center">
                    <Diagram limbs={this.props.targetGameUser.limbs} tguId={this.props.targetGameUser.id}/>
                </Row>
                <Row className="justify-content-center">{this.guessWordBlanked()}</Row>
                {(this.props.targetGameUser.id !== this.props.currentGameUser.id && this.props.targetGameUser.limbs < 6) ? <Letterbox guessLetter={this.guessLetter} gameUserId={this.props.targetGameUser.id} guessedLettersArr={this.guessedLettersArr()}/> : null}
                </Container>
            </Col>
        )
    }

}
export default PlayerContainer