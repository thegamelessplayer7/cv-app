import React, { Component } from 'react';
import './App.css';
import Personal from './Components/Personal';
import PersonalRender from './Components/PersonalRender';
import WorkExperience from './Components/WorkExperience';
import WorkExpRender from './Components/WorkExpRender';
import uniqid from 'uniqid';


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      workComponent: {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          jobDescription: '',
          id: uniqid(),
        },
        work: {
          company: '',
          position: '',
          yearStarted: '',
          yearEnded: '',
          description: '',
          id: uniqid(),
      },
      workArr: [],
      
      componentArray: [{}],
      educationArray: [{}],
    }
  }

  addComponent = () => {
    this.setState({
      componentArray: [...this.state.componentArray, {company: '', position: '', startDate: '', endDate: '', jobDescription: '', id: uniqid()}],
    })
  }

  workHandleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
        work: {
            ...this.state.work,
            [name]: value,
            id: this.state.work.id,
        }
        
        
    })
    console.log(this.state.work);
    console.log(this.state.workArr);
}


  workOnSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        workArr: [...this.state.workArr, {work: ''}],
        work: {
        company: '',
        position: '',
        yearStarted: '',
        yearEnded: '',
        description: '',
        id: uniqid(), 
        }
    })
}

  render() {
    const { work, workArr } = this.state;
    return (
      <div>
        
        <PersonalRender />
        <WorkExperience />

        {
            <div>
              {this.state.componentArray.map((workInfo) => {
                return <div> <form onSubmit={this.workOnSubmitTask} key={workInfo.id} >
                        <label>Company</label>
                        <input type="text" name="company" onChange={this.workHandleChange} value={workInfo.company} ></input>
                        <label>Position</label>
                        <input type="text" name="position" onChange={this.workHandleChange} value={workInfo.position}></input>
                        <label>Start Date</label>
                        <input type="text" name="yearStarted" onChange={this.workHandleChange} value={workInfo.startDate}></input>
                        <label>End Date</label>
                        <input type="text" name="yearEnded" onChange={this.workHandleChange} value={workInfo.endDate}></input>
                        <label>Job Description</label>
                        <input type="text" name="description" onChange={this.workHandleChange} value={workInfo.jobDescription}></input>
                        <button type="submit">Enter</button>
                        <WorkExpRender work={workArr} />
                </form>
                
               </div> 
            }) 
        }
                <button key={this.state.component} onClick={this.addComponent}>Add</button>
                
            </div>
        }
      </div>
    );
  }
  
}

export default App;
