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
    <NavLink to='/'>home</NavLink>
    <NavLink to="/menu/">menu</NavLink>
    <NavLink to='/schedule/'>schedule</NavLink>
    <NavLink to='/about/'>about</NavLink>
    <NavLink to='/catering/'>catering</NavLink>
    
</div>
  );
}
}
export default Nav;




