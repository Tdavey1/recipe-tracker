import React from 'react';
import './App.css';
import Recipe from "./Recipe.js"
import Navbar from './Navbar.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe />
      </div>
    )
  }
}

export default App;
