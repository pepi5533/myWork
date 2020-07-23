import React from 'react';
import Messages from './MsgData';
import Input from './Input';
import { user } from './userName';


class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            member: {
                username: user
            }
        }

        this.drone = new window.Scaledrone('o8X2qXr1eMJGFv9d', {
            data: this.state.member
        });

        this.drone.on('open', error => {

            if (error) {
                return console.error(error);
            }

            const member = {...this.state.member};
            member.id = this.drone.clientId;
            this.setState({ member });
        })

        const room = this.drone.subscribe('observable-room');

        room.on('data', (data, member) => {
            const messages = this.state.messages;
            messages.push({member, text: data});
            this.setState({messages});
          });
    }

    sendMessage = (message) => {
        const messages = this.state.messages;
        messages.push({
            member: this.state.member
        })
        this.setState({ messages: messages })

        this.drone.publish({
            room: "observable-room",
            message
          });
    }
    


    render() {
        return (
            <div className='chatBG'>
                <h1 className='chatHeading'>Welcome to the Chatroom!</h1>
                <Messages messages={this.state.messages} currentMember={this.state.member} />
                <Input onSendMessage={this.sendMessage} />
            </div>
        )
    }
}

export default Chat;