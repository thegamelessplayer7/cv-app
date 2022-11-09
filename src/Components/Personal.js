import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return(
            <div>
                {this.props.info.map((info) => {
                    return <div>
                                <h1 key={info.id}>{info.name} </h1>
                                <h2>{info.title} </h2>
                                <h2>{info.phone} </h2>
                                <h3>{info.email} {info.location}</h3>
                            </div>
                })}
                
            </div>
        )
    }
}

export default Personal;