import React, { Component } from 'react';

import classes from './Button.module.css';
import clickSound from '../../../assets/sounds/click.mp3';

class ButtonFunction extends Component {
  state = {
    disableDoubleClick: false,
  };

  playAudioHandler = () => {
    this.setState({
      disableDoubleClick: true,
    });
    // if (this.props.muteContBtnFunc) {
    //   this.props.functionToExe();
    //   return;
    // }
    let audio = new Audio(clickSound);
    audio.play();
    const waitSecs = 200;
    setTimeout(() => {
      this.props.functionToExe();
    }, waitSecs);
    setTimeout(() => {
      this.setState({
        disableDoubleClick: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <button
          onClick={this.playAudioHandler}
          disabled={this.state.disableDoubleClick}
          // join() to transform the array in a string
          className={[classes.Button, classes[this.props.btnType]].join(' ')}
          // muteContBtnFunc={this.props.muteContBtnFunc}
        >
          <h3 className={classes.BtnNextQuestion}>{this.props.children}</h3>
        </button>
      </>
    );
  }
}

export default ButtonFunction;

// CHILDREN:
// {props.children} WILL RECEIVE "CANCEL"
// <Button btnType="Danger">CANCEL</Button>
