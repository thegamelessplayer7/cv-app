import React, { Component } from 'react';

class WorkExpRender extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.work.map((workInfo) => {
                    return <h1 key={workInfo.id}>{workInfo.company} {workInfo.position} {workInfo.yearStarted} {workInfo.yearEnded} {workInfo.description}</h1>
                })}
                {/* <button>Add</button> */}
            </div>
        )
    }
}

export default WorkExpRender;