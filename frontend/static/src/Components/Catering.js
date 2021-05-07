import React, { Component } from "react";

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

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const cateringRequestForm = (
      <form>
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