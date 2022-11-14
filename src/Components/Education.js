import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.info.map((info) => {
                    return(
                        <div>
                            <h3 key={info.id}>{info.degree} </h3>
                            <h4>{info.university}</h4>
                            <h4> {info.graduationDate}</h4>
                        </div>
                    ) 
                })}
            </div>
        )
    }
}

export default Education; 