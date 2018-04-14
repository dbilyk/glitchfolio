import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu/Menu"
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Menu />
      </div>
    );
  }
}

export default App;
