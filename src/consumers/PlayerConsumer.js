import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

class PlayerConsumer extends Component {

    handleReceived = (message) => {
        console.log(message)
    }

    handleClick = e => {
        e.preventDefault()
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <ActionCableConsumer
                channel={{channel: 'GamesChannel', key: this.props.inviteKey}}
                onReceived={this.handleReceived}
                >
                    <button onClick={this.handleClick}>Push</button>
                </ActionCableConsumer>
            </div>
        )}
}

export default PlayerConsumer