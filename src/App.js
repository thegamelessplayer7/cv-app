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

  addComponent = () => {
    this.setState({
      workArr: [...this.state.workArr, {work: ''}],
      
    })
    console.log(this.state.workArr);
  }

  workHandleChange = (e) => {
    e.preventDefault();
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
        workArr: [...this.state.workArr, this.state.work],
        work: {
          company: '',
          position: '',
          yearStarted: '',
          yearEnded: '',
          description: '',
          id: uniqid(), 
        },
    })
}



  render() {
    const { work, workArr } = this.state;
    return (
      <div>
        
        <PersonalRender />
        <WorkExperience workArr={this.state.workArr} work={this.state.work} handleChange={this.workHandleChange} onSubmitTask={this.workOnSubmitTask} addComponent={this.addComponent} />


        
      </div>
    );
  }
  
}

export default App;


// I need to figure out the proper way to represent my components in this cv-app.
// I want the add button to produce another Work Experience component, but where do I 
// put the logic for it? Do I put it all in the Work Experience component, everything
// including the add button? This is what I need to figure out. Is there a way to put
// the add button inside of the App component and then use it to access the logic from
// the Work Experience component? Find out on the next episode of DragonBall Z. 



// {
//   <div>
//     {this.state.componentArray.map((workInfo) => {
//       return <div> 
//         <form onSubmit={this.workOnSubmitTask} key={workInfo.id} >
//               <label>Company</label>
//               <input type="text" name="company" onChange={this.workHandleChange} value={workInfo.company} ></input>
//               <label>Position</label>
//               <input type="text" name="position" onChange={this.workHandleChange} value={workInfo.position}></input>
//               <label>Start Date</label>
//               <input type="text" name="yearStarted" onChange={this.workHandleChange} value={workInfo.startDate}></input>
//               <label>End Date</label>
//               <input type="text" name="yearEnded" onChange={this.workHandleChange} value={workInfo.endDate}></input>
//               <label>Job Description</label>
//               <input type="text" name="description" onChange={this.workHandleChange} value={workInfo.jobDescription}></input>
//               <button type="submit">Enter</button>
//               {/* <WorkExperience work={workArr} /> */}
//         </form>
      
//      </div> 
//   }) 
// }

//       {this.state.componentArray.map((workInfo) => {
//                           return <h1 key={workInfo.id}>{workInfo.company} {workInfo.position} {workInfo.yearStarted} {workInfo.yearEnded} {workInfo.description}</h1>
//                       })}
//       <button key={this.state.component} onClick={this.addComponent}>Add</button>
      
//   </div>
// }



// use this piece of code for creating new form functionality 
// workArr: [...this.state.workArr, {work: ''}],


// addComponent = () => {
//   this.setState({
//     componentArray: [...this.state.componentArray, {company: '', position: '', startDate: '', endDate: '', jobDescription: '', id: uniqid()}],
//   })
// }