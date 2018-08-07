import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>Components</h1>
        <p>You can even use components</p>
        <button onClick={this.handleClick}>Click me</button>
        <p>You have clicked { this.state.counter } times</p>
      </div>
    )
  }
}

export default Counter
