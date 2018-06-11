import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <h1>Total: {this.props.totalClicks}</h1>
        <div>
          <button onClick={this.props.incrementCounter}>Increment</button>
          <button onClick={this.props.decrementCounter}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
