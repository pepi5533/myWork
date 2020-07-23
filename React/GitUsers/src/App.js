import React from 'react';
import Input from './Components/Input';
import Users from './Components/Users';
import './App.css';


class App extends React.Component {
    state = {
        search: '',
        user: {},
        repo: []
    }

    mySearch = (event) => {
        let query = event.target.value;
        this.setState({ search: query });
    }
    
    myApi = (event) => {
        event.preventDefault();

        fetch(`https://api.github.com/users/${this.state.search}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ user: data })
            console.log(this.state.user)
        })
        
        fetch(`https://api.github.com/users/${this.state.search}/repos`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ repo: data })
        })
    }

    render() {
        return (
            <div>
                <Input mySearch={this.mySearch} myApi={this.myApi} />
                <Users user={this.state.user} repo={this.state.repo} />
            </div>
        )
    }
}

export default App;
