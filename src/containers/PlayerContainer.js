import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class PlayerContainer extends Component {
    // make container with username, svg diagram, hidden word and letterbox
    render() {
        return(
            <Container>
                <Row>{this.props.username}</Row>
            </Container>
        )
    }

}
export default PlayerContainer