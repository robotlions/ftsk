import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div className="navbar navRow">
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/menu/">Menu</NavLink>
        <NavLink to='/schedule/'>Schedule</NavLink>
        <NavLink to='/about/'>About</NavLink>
        
    </div>
  );
}
}
export default Nav;




