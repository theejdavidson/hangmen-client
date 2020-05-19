import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactSVG } from 'react-svg'

const mapLimbsToSVG = [<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_0.svg'}
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_1.svg'}
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px')
      svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_2.svg'}
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_3.svg'}
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px')
      svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_4.svg'}
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_5.svg'}
    beforeInjection={svg => {
      svg.setAttribute('style', 'width: 200px')
      svg.setAttribute('style', 'height: 200px')

    }}/>,
<ReactSVG src={process.env.PUBLIC_URL + '/diagrams/limbs_6.svg'}
beforeInjection={svg => {
  svg.setAttribute('style', 'width: 200px')
  svg.setAttribute('style', 'height: 200px')

}}/>]

class PlayerContainer extends Component {
    // make container with username, svg diagram, hidden word and letterbox
    render() {
        console.log(this.props)
        return(
            <Col>
                <Row>{this.props.username}</Row>
                <Row>
                    {mapLimbsToSVG[this.props.gameUserState.limbs]}
                </Row>
                <Row>{this.props.gameUserState.guessWord}</Row>
            </Col>
        )
    }

}
export default PlayerContainer