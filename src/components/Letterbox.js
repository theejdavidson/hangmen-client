import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default class Letterbox extends Component {

    letterbox = () => {
       return <Row>
                {letters.map(l => {
                        return <Col>
                        <Button key={l} disabled={false} onClick={() => {
                            console.log()
                            this.props.guessLetter(l)
                            }}>{l}</Button>
                        </Col>
                    })
                }
                </Row>
    }
    render() {
        return(
            <Container>
                {this.letterbox()}
            </Container>
        )
    }

}