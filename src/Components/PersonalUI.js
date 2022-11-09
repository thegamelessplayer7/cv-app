import React, { Component } from 'react';
import Personal from './Personal';
import uniqid from 'uniqid';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { type } from '@testing-library/user-event/dist/type';

 
class PersonalUI extends Component {
  constructor() {
    super()

    this.state = {
      personal: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        description: '',
        id: uniqid(),
      },
      infoArr: [],
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      personal: {
        ...this.state.personal,
        [name]: value,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      infoArr: [...this.state.infoArr, this.state.personal],
      personal: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        description: '',
        id: uniqid(),
      },
    })
    console.log(this.state.infoArr);
  }

  render() {
    const { infoArr, personal } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmitTask}>
          <label>Name</label>
          <input value={personal.name} name="name" onChange={this.handleChange} type="text"></input>
          <label>Title</label>
          <input value={personal.title} name="title" onChange={this.handleChange} type="text"></input>
          <label>Phone</label>
          <input value={personal.phone} name="phone" onChange={this.handleChange} type="number"></input>
          <label>Email</label>
          <input value={personal.email} name="email" onChange={this.handleChange} type="text"></input>
          <label>Location</label>
          <input value={personal.location} name="location" onChange={this.handleChange} type="text"></input>
          <button type="submit" >Submit</button>
        </form>
        <Personal info={infoArr} />
      
      </div>
    );
  }
  
}

export default PersonalUI;



