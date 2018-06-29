import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {
  state = {
    username: "System Admin",
  }
  
  changeInputHandler = (event) => {
    // debugger
    this.setState({
      username: event.target.value,
    })
    // debugger
  }
  

  
  render() {
 
    return (
      <div className="App">
        <UserInput 
          currentName={this.state.username} 
          change={this.changeInputHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;


// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>