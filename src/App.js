import React, { Component } from 'react';
import Personal from './Components/Personal';
import PersonalRender from './Components/PersonalRender';
import WorkExperience from './Components/WorkExperience';
import uniqid from 'uniqid';


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        work: {
          company: '',
          position: '',
          yearStarted: '',
          yearEnded: '',
          description: '',
          id: uniqid(),
      },
      workArr: [{}],
      
      componentArray: [{}],
      educationArray: [{}],
    }
  }

  addWorkObject = () => {
    this.setState((state, props) => ({
      workArr: [...state.workArr, {work: ''}],
      
    })
  )}


  addComponent = (e) => {
    e.preventDefault();
    console.log('test')
    this.setState((state, props) => ({
      componentArray: [...state.componentArray, {company: '', position: '', startDate: '', endDate: '', jobDescription: '', id: uniqid()}],
    }))}

  workHandleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState((state, props) => ({
        work: {
            ...state.work,
            [name]: value,
            id: state.work.id,
        }
       }))
  }


  workOnSubmitTask = (e) => {
    e.preventDefault();
    this.setState((state, props) => ({
        workArr: [...state.workArr, state.work],
        work: {
          company: '',
          position: '',
          yearStarted: '',
          yearEnded: '',
          description: '',
          id: uniqid(), 
        },
    }))
  }



  render() {
    // const { work, workArr, componentArray } = this.state;
    return (
      <div>
        
        <PersonalRender />
        <WorkExperience workArr={this.state.workArr} work={this.state.work} componentArray={this.state.componentArray} handleChange={this.workHandleChange} onSubmitTask={this.workOnSubmitTask} addComponent={this.addComponent} />

      </div>
    );
  }
  
}

export default App;

