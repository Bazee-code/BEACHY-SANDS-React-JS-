import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// local
import Home from './components/Home.js';
import Rooms from './components/Rooms.js';
import EachRoom from './components/EachRoom.js';
import About from './components/About.js';
import ErrorPage from './components/ErrorPage.js';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route path="/rooms/:slug" component={EachRoom}/>
          <Route path="/about" component={About}/>
          <Route component={ErrorPage}/>
        </Switch>
        <Footer />
        </Router>
      </React.Fragment>
    )
  }
}


export default App;

// route renders all components that match the specified url
// switch renders only the first component that matches the specified url