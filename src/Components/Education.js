import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.info.map((info) => {
                    return <h1 key={info.id}>{info.degree} {info.university} {info.graduationDate}</h1>
                })}
            </div>
        )
    }
}

export default Education; 