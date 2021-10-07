import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
