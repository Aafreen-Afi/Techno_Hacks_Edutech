import React, { Component } from 'react';
import './App.css';
class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.initialTime, // Initial time in seconds
      isRunning: false,
    };
    this.timer = null;
  }

  startTimer = () => {
    this.setState({ isRunning: true });
    this.timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((prevState) => ({ time: prevState.time - 1 }));
      } else {
        this.stopTimer();
      }
    }, 1000); // Update the timer every second
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ time: this.props.initialTime });
  };

  restartTimer = () => {
    this.resetTimer();
    this.startTimer();
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { time, isRunning } = this.state;

    return (
      <div>
        <h1>Countdown Timer: {time} seconds</h1>
        {!isRunning ? (
          <button className='start' onClick={this.startTimer}>START</button>
        ) : (
          <>
            <button className='stop' onClick={this.stopTimer}>STOP</button>
            <button className='reset' onClick={this.resetTimer}>RESET</button>
          </>
        )}
        <button className='restart' onClick={this.restartTimer}>RESTART</button>
      </div>
    );
  }
}

export default CountdownTimer;
