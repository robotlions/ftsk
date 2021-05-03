import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './Components/Register'

class App extends Component {

render(){

  return(
<div className="App">
  <div className="container">
    <div className="row titleRow sticky-top">
      <h1>Words and Stuff</h1></div>
      <div className="navbar navRow row sticky-top">
      <span>Schedule</span><span>Menu</span><span>About</span>
      </div>
      <div className="row">
        <div className="col-12 frontSplash">
        Some Extremely Useful Information
        <Register />
        </div>
      </div>
    <div className="row navbar navRow bottomNav">
    <span>Contact</span><span>Something</span><span>Login</span>
    </div>
    </div>
  </div>
  )
}
}

export default App;
