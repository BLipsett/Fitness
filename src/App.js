import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path='/'>
        <Homepage />
        </Route>
      </Router>
      );
    }
  }

export default App;
