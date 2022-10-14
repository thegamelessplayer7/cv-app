import React, { Component } from 'react';
import uniqid from 'uniqid';
import Education from './Education';
// import { format } from 'date-fns';

class EducationUI extends Component {
    constructor() {
        super() 
        
        this.state = {
            educationObj: {
                degree: '',
                university: '',
                graduationDate: '',
                id: uniqid(),
            },
            educationArr: [],
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            educationObj: {
                ...this.state.educationObj,
                [name]: value,
            }
        })
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            educationArr: [...this.state.educationArr, this.state.educationObj],
            educationObj: {
                degree: '',
                university: '',
                graduationDate: '',
                id: uniqid(),
            }
        })
    }

    render() {
        const { educationObj, educationArr } = this.state;
        return(
            <div className="App">
                <form onSubmit={this.onSubmitTask}>
                    <label>Degree</label>
                    <input value={educationObj.degree} name="degree" onChange={this.handleChange} type="text" ></input>
                    <label>University</label>
                    <input value={educationObj.university} name="university" onChange={this.handleChange} type="text" ></input>
                    <label>Graduation Date</label>
                    <input value={educationObj.graduationDate} name="name" onChange={this.handleChange} type="date" ></input>
                    <button type="submit">Enter</button>
                </form>
                <Education info={educationArr} />
            </div>
        )
    }


}

export default EducationUI;