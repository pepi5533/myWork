import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    state = {
        text: ''
    }

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
    if ( this.state.text.length > 0 ) { 

        this.setState({ text: '' });
        this.props.onSendMessage(this.state.text);
        if (event.keyCode === 13) {
            return this;
        }

      }else {
          alert('Type something!');
        }
    }

    render() {
        return (
            <div className='myInput'>
                <form onSubmit={e => this.onSubmit(e)}>

                    <input onChange={e => this.onChange(e)}
                            value={this.state.text}
                            type='text'
                            placeholder='Enter your text'
                            className='msgInput' />
                    <button className='msgBtn'>Send</button>

                </form>
            </div>
        )
    }
}

export default Input;

Input.propTypes = {
    onSendMessage: PropTypes.func
}