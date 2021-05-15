import React, { Component } from "react";
import Cookies from "js-cookie";

class Catering extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        phone: "",
        email: "",
        dayTime: "",
        numAttendees: "",
        description: "",
        requests: "",
    };
    this.submitRequest = this.submitRequest.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitRequest(e){
    e.preventDefault()
        const request = {
          name: `Name: ${this.state.name}`,
          phone: `Phone: ${this.state.phone}`,
          email: `Email: ${this.state.email}`,
          dayTime: `Day and Time: ${this.state.dayTime}`,
          numAttendees: `No. of Attendees: ${this.state.numAttendees}`,
          description: `Description: ${this.state.description}`,
          requests: `Special Requests: ${this.state.requests}`,
        };
        fetch(`/contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
          },
          body: JSON.stringify(request),
        });
      }
  

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const cateringRequestForm = (
      <form onSubmit={this.submitRequest}>
        <input
          placeholder="Contact Name"
          className="form-control"
          value={this.state.name}
          name="name"
          onChange={this.handleInput}
        />
        <br />
        <input
          placeholder="Phone"
          className="form-control"
          value={this.state.phone}
          name="phone"
          type="tel"
          onChange={this.handleInput}
        />
        <br />
        <input
          placeholder="Email"
          className="form-control"
          value={this.state.email}
          name="email"
          type="email"
          onChange={this.handleInput}
        />
        <br />

        <input
          placeholder="Event Date and Time"
          className="form-control"
          value={this.state.dayTime}
          name="dayTime"
          type="datetime-local"
          onChange={this.handleInput}
        />
        <br />
        <input
          placeholder="Number of Attendees"
          className="form-control"
          value={this.state.numAttendees}
          name="numAttendees"
          onChange={this.handleInput}
        />
        <br />
        <textarea
          placeholder="Please describe the event"
          className="form-control"
          rows="5"
          type="text"
          value={this.state.description}
          name="description"
          onChange={this.handleInput}
        />
        <br />
        <textarea
          placeholder="Special Requests"
          className="form-control"
          rows="5"
          type="text"
          value={this.state.requests}
          name="requests"
          onChange={this.handleInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );

    return (
      <div>
        <h1>Catering Request Form</h1>
        <p>
          This is only a request for information, not a confirmation of booking.
          We'll contact you if we want to handle your shitty kid's birthday
          party.
        </p>
        {cateringRequestForm}
      </div>
    );
  }
}
export default Catering;
