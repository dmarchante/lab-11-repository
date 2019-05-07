import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  handleNumberIncrement = e => {
    e.preventDefault();

    let counter = this.state.counter + 1;

    this.setState({ counter });
  }

  handleNumberDecrement = e => {
    e.preventDefault();

    let counter = this.state.counter - 1;

    this.setState({ counter });
  }

  render() {
    return (
      <section>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleNumberIncrement}>+</button>
        <button onClick={this.handleNumberDecrement}>-</button>
      </section>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
