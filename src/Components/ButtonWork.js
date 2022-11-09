import React, { Component } from 'react';

class ButtonWork extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default ButtonWork; 