import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  clickHandle = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.clickHandle}
      ></div>
      // <div
      //   className="cell"
      //   style={{ backgroundColor: this.state.color }}
      //   onClick={() => this.setState({ color: '#333' })}>
      // </div>
    )
  }
}
