import React, { Component } from 'react';

class Education extends Component {
    render() {
        return(
            <div>
                {this.props.info.map((info) => {
                    return(
                        <div key={info.id}>
                            <h3>{info.degree}</h3>
                            <h4>{info.university}</h4>
                            <h4> {info.graduationDate}</h4>
                            <button onClick={this.props.deleteBtn}>Delete</button>
                        </div>
                    ) 
                })}
            </div>
        )
    }
}

export default Education; 