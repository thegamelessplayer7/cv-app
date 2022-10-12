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

            })}

                
            </div>
            
        )
    }


}

export default WorkExperience;


// When I hit add, two forms are being created. It's building a form from the app.js
// and the  WorkExperience.js. Fix that. Then pick a way for the new WorkExperience form
// to be created upon pressing the add button. 





{/* <form>
                    {this.props.work.map((workInfo) => {
                        return <h1 key={workInfo.id}>{workInfo.company} {workInfo.position} {workInfo.yearStarted} {workInfo.yearEnded} {workInfo.description}</h1>
                    })}
                    <label>Company</label>
                    <input placeholder="test" value={this.props.work.company} name="company" onChange={this.props.handleChange} type="text"></input>
                    <label>Position</label>
                    <input value={this.props.work.position} name="position" onChange={this.props.handleChange} type="text"></input>
                    <label>Start Date</label>
                    <input value={this.props.work.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                    <label>End Date</label>
                    <input value={this.props.work.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                    <label>Job Description</label>
                    <input value={this.props.description} name="description" onChange={this.props.handleChange} type="text"></input>
                    <button type="submit">Enter</button>

                    
                </form> */}





                // <form onSubmit={this.props.onSubmitTask} >
                    
                //     <label>Company</label>
                //     <input placeholder="test" value={workInfo.company} name="company" onChange={this.props.handleChange} type="text"></input>
                //     <label>Position</label>
                //     <input value={workInfo.position} name="position" onChange={this.props.handleChange} type="text"></input>
                //     <label>Start Date</label>
                //     <input value={workInfo.yearStarted} name="yearStarted" onChange={this.props.handleChange} type="text"></input>
                //     <label>End Date</label>
                //     <input value={workInfo.yearEnded} name="yearEnded" onChange={this.props.handleChange} type="text"></input>
                //     <label>Job Description</label>
                //     <input value={workInfo.description} name="description" onChange={this.props.handleChange} type="text"></input>
                //     <button type="submit">Enter</button>

                    
                // </form>