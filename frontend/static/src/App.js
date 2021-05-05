import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Cookies from "js-cookie";
import Nav from './Components/Nav';
import About from './Components/About';
import Schedule from './Components/Schedule';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Splash from './Components/Splash';
import bannerlg from './images/bannerlg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: !!Cookies.get("Authorization"),
    };
    
  }

render(){

  return(
<div className="App">
  <div className="container">
    <div className="row titleRow">
      <img className="titleBanner" src={bannerlg} alt="title banner"/></div>
      <div className="row sticky-top">
        <Nav />
      </div>
      <div className="row">
        <div className="col-12 frontSplash">
        <React.Fragment>
    <Switch>
      <Route path="/about/" component={About}/>
      <Route path="/schedule/" component={Schedule}/>
      <Route path="/menu/" component={Menu} />
      <Route path="/login/" component={Login}/>
      <Route path="/" component={Splash} />
    </Switch>
    </React.Fragment>
        </div>
      </div>
    <div className="row navbar bottomNav">
    <span>Contact</span><NavLink to='/login/'>{this.state.isLoggedIn === true ? "Log Out" : "Log In"}</NavLink>
    </div>
    </div>
  </div>
  )
}
}

export default App;
