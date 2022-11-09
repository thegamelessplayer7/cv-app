import React, { Component } from 'react';
import Personal from './Components/Personal';
import PersonalUI from './Components/PersonalUI';
import WorkExperienceUI from './Components/WorkExperienceUI';
import WorkExp from './Components/WorkExp';
import NewWorkExperienceUI from './Components/NewWorkExperienceUI';
import EducationUI from './Components/EducationUI';
import Education from './Components/Education';
import uniqid from 'uniqid';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        personal: {
          name: '',
          title: '',
          phone: '',
          email: '',
          location: '',
          description: '',
          id: uniqid(),
        },
        infoArr: [],
        work: {
          company: '',
          position: '',
          yearStarted: '',
          yearEnded: '',
          description: '',
          id: uniqid(),
      },
      workArr: [{}],
      componentArray: [{
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        jobDescription: '', 
        id: uniqid()}],
        educationObj: {
          degree: '',
          university: '',
          graduationDate: '',
          id: uniqid(),
      },
      educationArr: [],
    }

    this.deleteComponent = this.deleteComponent.bind(this);
  }

  personalHandleChange = (e) => {
    const { value, name } = e.target;
    this.setState((state, props) => ({
      personal: {
        ...state.personal,
        [name]: value,
      }
    }))
  }

  personalOnSubmitTask = (e) => {
    e.preventDefault();
    this.setState((state, props) => ({
      infoArr: [...state.infoArr, state.personal],
      personal: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        description: '',
        id: uniqid(),
      },
    }))
    console.log(this.state.infoArr);
  }

  addComponent = (e) => {
    e.preventDefault();
    this.setState((state, props) => ({
      componentArray: [
        ...state.componentArray, 
        { company: '', 
          position: '', 
          startDate: '', 
          endDate: '', 
          jobDescription: '', 
          id: uniqid()
        }
      ],
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

    educationHandleChange = (e) => {
        const { value, name } = e.target;
        this.setState((state, props) => ({
            educationObj: {
                ...state.educationObj,
                [name]: value,
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

    educationOnSubmitTask = (e) => {
        e.preventDefault();
        this.setState((state, props) => ({
            educationArr: [...state.educationArr, state.educationObj],
            educationObj: {
                degree: '',
                university: '',
                graduationDate: '',
                id: uniqid(),
            }
        }))
    }

  render() {
    return (
      <div>
        
        <PersonalUI 
            handleChange={this.personalHandleChange}
            onSubmitTask={this.personalOnSubmitTask}
        />
        <WorkExperienceUI 
            workArr={this.state.workArr} 
            work={this.state.work} 
            componentArray={this.state.componentArray} 
            handleChange={this.workHandleChange} 
            onSubmitTask={this.workOnSubmitTask} 
            addComponent={this.addComponent} 
            deleteComponent={this.deleteComponent} 
        />
        
        <NewWorkExperienceUI 
            workArr={this.state.workArr}
            work={this.state.work} 
            componentArray={this.state.componentArray} 
            handleChange={this.workHandleChange} 
            onSubmitTask={this.workOnSubmitTask} 
            addComponent={this.addComponent} 
            deleteComponent={this.deleteComponent} 
        />
        <EducationUI
            handleChange={this.educationHandleChange}
            onSubmitTask={this.educationOnSubmitTask}
        />

        <div className="cv__container">
          <div className="cv__form">
              <Personal 
                info={this.state.infoArr} 
              />
              <WorkExp 
                  workArr={this.state.workArr} 
              />
              <Education 
                  info={this.state.educationArr} 
              />
          </div>

        </div>

      </div>
    );
  }
}

export default App;




