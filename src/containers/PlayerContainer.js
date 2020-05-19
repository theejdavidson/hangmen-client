import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactSVG } from 'react-svg'

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

    guessWordArr = () => this.props.gameUserState.guessWord.split('')

    guessWordBlanked = () => this.guessWordArr().map(letter => '_ ').join('')

    render() {
        console.log(this.props)
        return(
            <Container fluid>
                <Row className="justify-content-center">{this.props.username}</Row>
                <Row className="justify-content-center">
                    {mapLimbsToSVG[this.props.gameUserState.limbs]}
                </Row>
                <Row className="justify-content-center">{this.guessWordBlanked()}</Row>
            </Container>
        )
    }

}
export default PlayerContainer