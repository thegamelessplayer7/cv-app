import React, { Component } from 'react';
import './EducationUI.css';

class EducationUI extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div className="educationUI">
                <form onSubmit={this.props.onSubmitTask}>
                    <input placeholder="Degree" value={this.props.degree} name="degree" onChange={this.props.handleChange} type="text" ></input>
                    <input placeholder="University" value={this.props.university} name="university" onChange={this.props.handleChange} type="text" ></input>
                    <input placeholder="Graduation Date" value={this.props.graduationDate} name="name" onChange={this.props.handleChange} type="date" ></input>
                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }
}

export default EducationUI;