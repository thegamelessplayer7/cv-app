import React, { Component } from 'react';
import './WorkExperience.css';

class WorkExperienceUI extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmitTask} >  
                    <label className="label">Work Experience</label>  
                    <input placeholder="Company" value={this.props.company} name="company" onChange={this.props.handleChange} type="text"></input>
                    <input placeholder="Position" value={this.props.position} name="position" onChange={this.props.handleChange} type="text"></input>
                    <input placeholder="Start Date" value={this.props.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                    <input placeholder="End Date" value={this.props.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                    <input placeholder="Job Description" value={this.props.description} name="description" onChange={this.props.handleChange} type="text"></input>
                    <button type="submit">Enter</button>
                </form>
                <button onClick={this.props.deleteComponent}>Delete</button>
                
            </div> 
        )
    }
}

export default WorkExperienceUI;

