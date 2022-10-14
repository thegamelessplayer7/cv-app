import React, { Component } from 'react';
import PersonalUI from './Components/PersonalUI';
import WorkExperience from './Components/WorkExperience';
import WorkExpUI from './Components/WorkExpUI';
import NewWorkExperienceUI from './Components/NewWorkExperienceUI';
import EducationUI from './Components/EducationUI';
import uniqid from 'uniqid';


class App extends Component {
  constructor(props) {
    super(props);
    
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
      
      componentArray: [{company: '', position: '', startDate: '', endDate: '', jobDescription: '', id: uniqid()}],
      educationArray: [{}],
    }

    this.deleteComponent = this.deleteComponent.bind(this);
  }

  addWorkObject = () => {
    this.setState((state, props) => ({
      workArr: [...state.workArr, {work: ''}],
      
    })
  )}


  addComponent = (e) => {
    e.preventDefault();
    this.setState((state, props) => ({
      componentArray: [...state.componentArray, {company: '', position: '', startDate: '', endDate: '', jobDescription: '', id: uniqid()}],
    }))}



  deleteComponent(index) {
    const newComponentArray = this.state.componentArray;
    newComponentArray.splice(index, 1);
    this.setState({
      newComponentArray,
    })
  }


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
    return (
      <div>
        
        <PersonalUI />
        <WorkExperience workArr={this.state.workArr} work={this.state.work} componentArray={this.state.componentArray} handleChange={this.workHandleChange} onSubmitTask={this.workOnSubmitTask} addComponent={this.addComponent} deleteComponent={this.deleteComponent} />
        <WorkExpUI workArr={this.state.workArr} work={this.state.work} componentArray={this.state.componentArray} handleChange={this.workHandleChange} onSubmitTask={this.workOnSubmitTask} addComponent={this.addComponent} deleteComponent={this.deleteComponent} />
        <NewWorkExperienceUI workArr={this.state.workArr} work={this.state.work} componentArray={this.state.componentArray} handleChange={this.workHandleChange} onSubmitTask={this.workOnSubmitTask} addComponent={this.addComponent} deleteComponent={this.deleteComponent} />
        <EducationUI />
      </div>
    );
  }
  
}

export default App;




