import React, { Component } from 'react';
import Player from './Player';

export default class DeathRow extends Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    render() {
        return(
            <div>
                {/* {render all players} */}
                <Player />
            </div>
        )
    }
}