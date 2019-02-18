import React from 'react'

class Cell extends React.Component {
  // state = {color: this.props.value}

  constructor (props) {
    super(props)
    this.state = { color: props.value }
  }

  handleClickEvent = () => {
    this.setState({ color: '#333' })
  }

  render () {
    return (
      <div
        className="cell"
        style={{ backgroundColor: `${this.state.color}` }}
        onClick={this.handleClickEvent}
      >
        {' '}
      </div>
    )
  }
}

export default Cell
