import React, { Component } from 'react';
import './WorkExp.css';
import uniqid from 'uniqid';

class WorkExp extends Component {
    render() {
        return(
            <div>
                {this.props.workArr.map((workInfo) => {
                    return(
                        <div key={workInfo.id} className='work__experience'>
                            <h3>{workInfo.company} </h3>  
                            <h4>{workInfo.position} </h4>
                            <h4>{workInfo.yearStarted} </h4>
                            <h4>{workInfo.yearEnded} </h4>
                            <h4>{workInfo.description}</h4>
                            <button onClick={this.props.deleteBtn}>Delete</button>
                        </div>
                    ) 
                })}
            </div>
        )
    }
}

export default WorkExp;