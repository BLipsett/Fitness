import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route exact path='/'>
        <Homepage />
        </Route>
        </div>
      </Router>
      );
    }
  }

export default App;
