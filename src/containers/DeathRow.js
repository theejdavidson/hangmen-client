import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants/index';
// import Player from './Player';
import Cable from './Cable';

class DeathRow extends Component {
    constructor() {
        super()
        this.state = {
            allGames: [],
            activeGame: null
        }
    }

    render() {
        return(
            <div>
                {/* {render all players} */}
                {/* <Player /> */}
            </div>
        )
    }
}

export default DeathRow;