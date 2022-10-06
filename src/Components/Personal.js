import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return(
            <div>
                {this.props.info.map((info) => {
                    return <h1 key={info.id}>{info.name} {info.title} {info.phone} {info.email} {info.location}</h1>
                })}
                
            </div>
        )
    }
}

export default Personal;