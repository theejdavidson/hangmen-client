import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

class PlayerConsumer extends Component {

    handleReceived = (message) => {
        console.log(message)
    }

    render() {
        return (
            <ActionCableConsumer
            channel={{channel: 'GamesChannel'}}
            onRecieved={this.handleReceived}
            >
            </ActionCableConsumer>
        )
    }
}

export default PlayerConsumer