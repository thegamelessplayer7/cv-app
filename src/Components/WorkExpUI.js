import React, { Component } from 'react';
import uniqid from 'uniqid';

class WorkExpUI extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.workArr.map((workInfo) => {
                    return <div key={uniqid()}>
                        <h1 key={workInfo.id}>{workInfo.company} {workInfo.position} {workInfo.yearStarted} {workInfo.yearEnded} {workInfo.description}</h1>  
                        </div>
                    })
                }
            </div>
        )
    }
}

export default WorkExpUI;