import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      allValue: false,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.firstNamevalidation = this.firstNamevalidation.bind(this);
    this.lastNamevalidation = this.lastNamevalidation.bind(this);
    this.emailvalidation = this.emailvalidation.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(event);
    this.setState({
      submitted: true,
    });

    if (
      this.state.firstName.length !== 0 &&
      this.state.lastName.length !== 0 &&
      this.state.email.length !== 0
    ) {
      this.setState({
        allValue: true,
      });
    }

    setTimeout(() => {
      this.setState({
        allValue: false,
      });
    }, 3000);
  }

  firstNamevalidation(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  lastNamevalidation(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  emailvalidation(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={this.submitHandler}
        >
          {/* Uncomment the next line to show the success message */}
          {this.state.submitted && this.state.allValue && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            value={this.state.firstName}
            onChange={this.firstNamevalidation}
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.firstName.length === 0 && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          <input
            id="last-name"
            value={this.state.lastName}
            onChange={this.lastNamevalidation}
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.lastName.length === 0 && (
            <span id="last-name-error">Please enter a last name</span>
          )}

          <input
            id="email"
            value={this.state.email}
            onChange={this.emailvalidation}
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.email.length === 0 && (
            <span id="email-error">Please enter an email address</span>
          )}

          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
