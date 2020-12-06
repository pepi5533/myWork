import React from 'react';
import Generate from './Components/Generate';
import './App.css';

class App extends React.Component {
  state = {
    person: []
  }

  myApi = () => {

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ person: data })
    })
    console.log(this.state.person);
  } 

  render() {

    if (this.state.person != 0) {return <Generate person={this.state.person} />}

    return (
      <div>
        <button className='myButton' onClick={this.myApi}>Get Fake Identity</button>
      </div>
    )
  }
}

export default App;
