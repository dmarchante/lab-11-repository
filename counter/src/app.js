import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      clicks: 0,
    }
  }

  handleClicks = e => {
    let clicks = this.state.clicks + 1;

    this.setState({ clicks })
  }

  handleNumberIncrement = e => {
    e.preventDefault();

    let counter = this.state.counter + 1;

    this.setState({ counter });
    this.handleClicks();
  }

  handleNumberDecrement = e => {
    e.preventDefault();

    let counter = this.state.counter - 1;

    this.setState({ counter });
    this.handleClicks();
  }

  render() {
    return (
      <section>
        <p>Number of clicks: { this.state.clicks }</p>
        <h3>{ this.state.counter }</h3>
        <button onClick={ this.handleNumberIncrement }>+</button>
        <button onClick={ this.handleNumberDecrement }>-</button>
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
