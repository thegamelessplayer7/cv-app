import React, { Component } from 'react';
import './PersonalUI.css';



class PersonalUI extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="personalUI">
        <form onSubmit={this.props.onSubmitTask}>
          <label class="label">Personal Details</label>
          <input placeholder="Name" value={this.props.name} name="name" onChange={this.props.handleChange} type="text"></input>
          <input placeholder="Title" value={this.props.title} name="title" onChange={this.props.handleChange} type="text"></input>
          <input placeholder="Phone" value={this.props.phone} name="phone" onChange={this.props.handleChange} type="tel"></input>
          <input placeholder="Email" value={this.props.email} name="email" onChange={this.props.handleChange} type="text"></input>
          <input placeholder="Location" value={this.props.location} name="location" onChange={this.props.handleChange} type="text"></input>
          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalUI;



