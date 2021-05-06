import React, {Component} from 'react';


class Schedule extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div>
        <h4 style={{marginTop: "3vh"}}>Where we are today:</h4>
        <p>Location Information</p>
        <p>Time - Lunch or Dinner</p>
        <h4>Map</h4>
        <p>Theoretically, right here will be a Google map to the current location, which can be updated.</p>
    </div>
  );
}
}
export default Schedule;