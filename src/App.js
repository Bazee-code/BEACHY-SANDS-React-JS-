import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {ThemeProvider,createGlobalStyle} from 'styled-components';

// local
import Home from './components/Home.js';
import Rooms from './components/Rooms.js';
import EachRoom from './components/EachRoom.js';
import About from './components/About.js';
import ErrorPage from './components/ErrorPage.js';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';

// adding dark mode 
// createglobalstyle can access our theme provider from any where
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props=>props.theme.mode === 'dark' ? 'black' : 'white'};
    color : ${props=>props.theme.mode === 'dark' ? 'purple' : 'white'};
    font-size : ${props=>props.theme.mode === 'dark' ? "110%" : "100%"};
  }

`

const App =()=>{
  const [theme,setTheme] = useState({mode : 'light'});

  const handleDarkMode = (e)=>{
    setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})
   };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
        <GlobalStyle />
        <NavBar handleDarkMode = {handleDarkMode}/>
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
    </ThemeProvider>
  )
}


export default App;

// route renders all components that match the specified url
// switch renders only the first component that matches the specified url