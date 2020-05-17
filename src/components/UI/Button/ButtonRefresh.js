import React, { Component } from "react";

import classes from "./Button.module.css";
import clickSound from "../../../assets/sounds/click.mp3";

class ButtonRefresh extends Component {
  refreshPageHandler() {
    let audio = new Audio(clickSound);
    audio.play();
    // Seting 300 milliseconds, or 0.3 seconds to give time for the
    // audio to play
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
  render() {
    return (
      <>
        <audio className="btn-audio-element">
          <source src={clickSound}></source>
        </audio>
        <button
          onClick={this.refreshPageHandler}
          className={[classes.Button, classes[this.props.btnType]].join(" ")}
          // join() to transform the array in a string
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default ButtonRefresh;

// CHILDREN:
// {props.children} WILL RECEIVE "CANCEL"
// <Button btnType="Danger">CANCEL</Button>
