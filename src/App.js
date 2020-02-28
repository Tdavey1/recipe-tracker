import React from 'react';
import './App.css';
import Recipe from "./Recipe.js"
import Navbar from './Navbar.js'
import CookBook from './CookBook.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/recipe/:recipeID" component={Recipe} />
            <Route exact path="/cookbook" component={CookBook} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
