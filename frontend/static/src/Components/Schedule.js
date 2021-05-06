import React, { Component } from "react";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const mapLink = (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13095.739881393612!2d-82.40860492380443!3d34.85786128630853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scommunity%20tap!5e0!3m2!1sen!2sus!4v1620316041963!5m2!1sen!2sus"
        style={{border: "0", maxWidth: "100vw"}}
        allowFullScreen=""
        loading="lazy"
        title="map"
      ></iframe>
    );

    return (
      <div>
        <h4 style={{ marginTop: "3vh" }}>Where we are today:</h4>
        <p>Location Information</p>
        <p>Time - Lunch or Dinner</p>
        {mapLink}
      </div>
    );
  }
}
export default Schedule;
