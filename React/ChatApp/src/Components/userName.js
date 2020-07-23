import React from 'react';
import { Link } from 'react-router-dom';

export let user;

export default class userName extends React.Component {
    state = {
        name: ''
    }

    chooseName = (event) => {
        const typed = event.target.value;
        this.setState({ name: typed });
    }

    setUserName = () => {
        if (this.state.name.length != 0) { 
        user = this.state.name;
        this.setState({ name: '' });
        }else {
            alert('Enter a name!');
            window.location.reload(false);
        }
    }

    setUserKeypress = (event) => {
        if (event.keyCode === 13) {
            this.setUserName();
            document.getElementById('myBtn').click();
        }
    }

    render() {
        return (
            <div className='userNameBg'>

                <h1 className='userHeading'>Choose a username</h1>

                    <input type='text' value={this.state.name} placeholder='Enter a name' 
                        onChange={this.chooseName} onKeyDown={this.setUserKeypress} className='userInput' />

                <Link to='/chat' className='userLink'> <button id='myBtn' onClick={this.setUserName}>Enter</button> </Link>

            </div>
        )
    }
}