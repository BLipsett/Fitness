import React from 'react';
import './App.css';
import { Router } from 'react-router';
import Homepage from './pages/homepage/homepage.component';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Homepage />
      </Router>
      );
    }
  }

export default App;
