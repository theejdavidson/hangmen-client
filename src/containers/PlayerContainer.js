import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactSVG } from 'react-svg'
import Letterbox from '../components/Letterbox'
import { API_ROOT, HEADERS } from '../constants/index'

const mapLimbsToSVG = [<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_0.svg'}
wrapper="span"
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_1.svg'}
    wrapper="span"
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px; height: 200px')
    //   svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_2.svg'}
wrapper="span"
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_3.svg'}
wrapper="span"
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px')
      svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_4.svg'}
wrapper="span"
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_5.svg'}
wrapper="span"
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px')
      svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_6.svg'}
wrapper="span"
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>]

class PlayerContainer extends Component {
    // make container with username, svg diagram, hidden word and letterbox
    constructor(props) {
        super(props)
        this.state = {
            guessWordMap: this.guessWordMap()
        }
    }

    guessWordArr = () => {
        return this.props.gameUserState.guessWord.split('')
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
        const updatedGuessWordMap = [...this.state.guessWordMap]
        let hit = false
        updatedGuessWordMap.find((l, i) => {
            if(l.letter === letter && l.guessed === false) {
                hit = true
                updatedGuessWordMap[i].guessed = true
            }
        })

        if(hit) {
            this.setState({guessWordMap: updatedGuessWordMap})
        } else {
            console.log('incrementing limb')
            this.incrementLimb()
        }
    }

    incrementLimb = () => {
    // e.preventDefault()
        fetch(`${API_ROOT}/api/v1/increment-limb`, {
            method: 'PATCH',
            headers: HEADERS,
            body: JSON.stringify({
                gameUserId: this.props.gameUserState.gameUserId
            })
        })
    }

    render() {
        console.log('pc props: ', this.props)
        console.log('pc state: ', this.state)
        return(
            <Container fluid>
                <Row className="justify-content-center">{this.props.username}</Row>
                <Row className="justify-content-center">
                    {mapLimbsToSVG[this.props.gameUserState.limbs]}
                </Row>
                <Row className="justify-content-center">{this.guessWordBlanked()}</Row>
                <Letterbox guessLetter={this.guessLetter}/>
            </Container>
        )
    }

}
export default PlayerContainer