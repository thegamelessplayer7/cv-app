import React, { Component } from 'react';
import './WorkExp.css';
import uniqid from 'uniqid';

class WorkExp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.workArr.map((workInfo) => {
                    return(
                        <div className='work__experience' key={uniqid()}>
                            <h3 key={workInfo.id}>{workInfo.company} </h3>  
                            <h4>{workInfo.position} </h4>
                            <h4>{workInfo.yearStarted} </h4>
                            <h4>{workInfo.yearEnded} </h4>
                            <h4>{workInfo.description}</h4>
                        </div>
                    ) 
                })}
            </div>
        )
    }
}

export default WorkExp;