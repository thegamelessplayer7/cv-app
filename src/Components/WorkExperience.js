import React, { Component } from 'react';
import uniqid from 'uniqid';
import WorkExpRender from './WorkExpRender';

class WorkExperience extends Component {
    constructor() {
        super()

        this.state = {
            work: {
                company: '',
                position: '',
                yearStarted: '',
                yearEnded: '',
                description: '',
                id: uniqid(),
            },
            workArr: [],
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            work: {
                ...this.state.work,
                [name]: value,
                id: this.state.work.id,
            }
            
            
        })
        console.log(this.state.work)
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            workArr: [...this.state.workArr, this.state.work],
            company: '',
            position: '',
            yearStarted: '',
            yearEnded: '',
            description: '',
            id: uniqid(), 
        })
        console.log(this.state.workArr)
    }


    render() {
        const { work, workArr } = this.state;
        return(
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label>Company</label>
                    <input value={work.company} name="company" onChange={this.handleChange} type="text"></input>
                    <label>Position</label>
                    <input value={work.position} name="position" onChange={this.handleChange} type="text"></input>
                    <label>Start Date</label>
                    <input value={work.yearStarted} name="yearStarted" onChange={this.handleChange} type="text"></input>
                    <label>End Date</label>
                    <input value={work.yearEnded} name="yearEnded" onChange={this.handleChange} type="text"></input>
                    <label>Job Description</label>
                    <input value={work.description} name="description" onChange={this.handleChange} type="text"></input>
                    <button type="submit">Enter</button>

                    
                </form>
                <WorkExpRender work={workArr} />

            </div>
        )
    }


}

export default WorkExperience;