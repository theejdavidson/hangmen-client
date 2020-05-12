import React, { Component } from 'react';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default class Letterbox extends Component {
    constructor() {
        super()
        this.state = {
            guessed: []
        }
    }

    letterbox = () => {
       return <div>
                {letters.map(l => <div>{l}</div>)}
                </div>
    }
    render() {
        return(
            <div>{this.letterbox()}</div>
        )
    }

}