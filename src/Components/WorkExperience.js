import React, { Component } from 'react';
import uniqid from 'uniqid';
import WorkExpRender from './WorkExpRender';

class WorkExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmitTask} >
                    
                    <label>Company</label>
                    <input placeholder="test" value={this.props.company} name="company" onChange={this.props.handleChange} type="text"></input>
                    <label>Position</label>
                    <input value={this.props.position} name="position" onChange={this.props.handleChange} type="text"></input>
                    <label>Start Date</label>
                    <input value={this.props.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                    <label>End Date</label>
                    <input value={this.props.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                    <label>Job Description</label>
                    <input value={this.props.description} name="description" onChange={this.props.handleChange} type="text"></input>
                    <button type="submit">Enter</button>

                    
                </form>

                <button onClick={this.props.addComponent}>Add</button>

                {this.props.workArr.map((workInfo) => {
                    return <div>
                        <h1 key={workInfo.id}>{workInfo.company} {workInfo.position} {workInfo.yearStarted} {workInfo.yearEnded} {workInfo.description}</h1>  
                        </div>
                    })
                }


                {this.props.componentArray.map((workInfo) => {
                    return <div>       
                        <form onSubmit={this.props.onSubmitTask} >
                            <label>Company</label>
                            <input placeholder="test" value={this.props.company} name="company" onChange={this.props.handleChange} type="text"></input>
                            <label>Position</label>
                            <input value={this.props.position} name="position" onChange={this.props.handleChange} type="text"></input>
                            <label>Start Date</label>
                            <input value={this.props.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                            <label>End Date</label>
                            <input value={this.props.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                            <label>Job Description</label>
                            <input value={this.props.description} name="description" onChange={this.props.handleChange} type="text"></input>
                            <button type="submit">Enter</button>    
                        </form> 
                        <button onClick={this.props.addComponent}>Add</button> 
                    </div>

                })}

                
            </div>
            
        )
    }
}

export default WorkExperience;

