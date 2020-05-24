import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Letterbox from '../components/Letterbox'
import Diagram from '../components/Diagram'
import { API_ROOT, HEADERS } from '../constants/index'
class PlayerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guessWordMap: this.guessWordMap()
        }
    }

    guessWordArr = () => {
        return this.props.targetGameUser.guess_word.split('')
    }

    guessWordMap = () => this.guessWordArr().map(letter => ({letter: letter, guessed: false}))

    guessWordBlanked = () => {
        return this.state.guessWordMap.map(l => {
            if(l.guessed === true) {
                return l.letter
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
            <Container fluid>
                <Row className="justify-content-center">{this.props.targetUsername}</Row>
                <Row className="justify-content-center">
                    <Diagram limbs={this.props.targetGameUser.limbs} />
                </Row>
                <Row className="justify-content-center">{this.guessWordBlanked()}</Row>
                {(this.props.targetGameUser.id !== this.props.currentGameUser.id) ? <Letterbox guessLetter={this.guessLetter} gameUserId={this.props.targetGameUser.id}/> : null}
            </Container>
        )
    }

}
export default PlayerContainer