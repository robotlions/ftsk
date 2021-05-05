import React, {Component} from 'react';
import '../App.css';
import almond from '../images/almond.jpg';

class Splash extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div>
        <img className="splashPhoto" src={almond} alt="splash"></img>
        <div className="homeText"><h4>Your made-from-scratch alternative to eating at home with your cat.</h4></div>
    </div>
  );
}
}
export default Splash;