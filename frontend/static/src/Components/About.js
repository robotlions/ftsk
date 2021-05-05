import React, {Component} from 'react';


class About extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div>
       <h4 style={{marginTop: "3vh"}}>About Us:</h4>
       <p>Some mostly truthful information about stuff.</p>
       <h4>Contact</h4>
       <p>Email: <a href="mailto:email@sample.com">email@sample.com</a></p>
       <p>Phone: 555-555-5555</p>
    </div>
  );
}
}
export default About;
