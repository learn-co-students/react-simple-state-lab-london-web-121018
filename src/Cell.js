import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }


    changeColour = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }} onClick={this.changeColour} className="cell">
            </div>
        )
    }
}

