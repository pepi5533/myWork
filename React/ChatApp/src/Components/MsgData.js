import React from 'react';
import PropTypes from 'prop-types';

class Messages extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    renderMessage = (message) => {

        const { member, text } = message;
        const { currentMember } = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-messageCurrentMember" : 'Messages-message';
        let randomKey = Math.random();

        let whichMember = () => {
            if (className === 'Messages-messageCurrentMember') {
                return member.username;
            }else if (className === 'Messages-message') {
                return member.clientData.username;
            }
        }
        
        return (
            <li className={className} key={randomKey}>
                <div className='MessageContent'>
                    <div className='username'> {whichMember()} </div>
                    <div className='text'>{text}</div>
                </div>
            </li>
        )
    }

    render() {

        const { messages } = this.props;

        return (
            <ul className='myUl'>
                {messages.map(msg => this.renderMessage(msg))}
                <div ref={(el) => { this.messagesEnd = el; }}
                         style={{ float:'left', clear: 'both' }}>
                    </div>
            </ul>
        )
    }
}

export default Messages;

Messages.propTypes = {
    currentMember: PropTypes.object,
    messages: PropTypes.array
}