import React, { Component } from 'react';
// import Matrix from './Matrix';

class Cell extends Component {
  constructor(props) {
    super(props)

     this.state = {
       color: props.value
    }
  }

  changeColour = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={this.changeColour} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

export default Cell;
