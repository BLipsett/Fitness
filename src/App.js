import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import WendlerPage from './pages/wendler/wendlerPage.component';
import StartingStrengthPage from './pages/startingStrength/startingStrength.component';
import TodoPage from './pages/todoPage/todoPage.component';
import Header from './components/header/header.component';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='app'>
          <div className='header-bar'>
        <Header />
        </div>
        <div className='main-page'>
        <Route exact path='/'>
        <Homepage />
        </Route>
        <Route path='/wendlerPage'>
          <WendlerPage />
          </Route>
           <Route path='/startingStrengthPage'>
          <StartingStrengthPage />
          </Route>
          <Route exact path='/todoList'>
        <TodoPage />
        </Route>
          </div>
        </div>
      </Router>
      );
    }
  }

export default App;
