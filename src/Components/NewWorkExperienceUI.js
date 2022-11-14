import React, { Component } from 'react';
import './NewWorkExperienceUI.css';

class NewWorkExperienceUI extends Component {
    constructor(props) {
        super(props)
    }
 
    render() {
        return(
            <div>
                {this.props.componentArray.map((info, index) => {
                    console.log(this.props.componentArray);
                    return <div key={info.id}>     
                        <form onSubmit={this.props.onSubmitTask} >
                            <input placeholder="Company" value={this.props.company} name="company" onChange={this.props.handleChange} type="text"></input>
                            <input placeholder="Position" value={this.props.position} name="position" onChange={this.props.handleChange} type="text"></input>
                            <input placeholder="Start Date" value={this.props.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                            <input placeholder="End Date" value={this.props.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                            <input placeholder="Job Description" value={this.props.description} name="description" onChange={this.props.handleChange} type="text"></input>
                            <button type="submit">Enter</button>    
                        </form> 
                        <button onClick={this.props.deleteComponent}>Delete</button>
                        <button onClick={this.props.addComponent}>Add</button> 
                    </div>

                })}
            </div>
        )
    }
}

export default NewWorkExperienceUI;