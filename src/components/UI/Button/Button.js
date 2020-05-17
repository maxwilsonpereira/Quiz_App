import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";
import clickSound from "../../../assets/sounds/click.mp3";

class Button extends Component {
  playAudioHandler = () => {
    let audio = new Audio(clickSound);
    audio.play();
    if (this.props.audioCurrent) {
      this.props.audioCurrent.pause();
    }
    // const waitSecs = 200;
    // setTimeout(() => {
    //   window.location.href = this.props.linkToGo;
    // }, waitSecs);
    //  window.location.href will make the page refresh
  };

  render() {
    return (
      <>
        <audio className="btn-audio-element">
          <source src={clickSound}></source>
        </audio>
        <Link
          className={[classes.Button, classes[this.props.btnType]].join(" ")}
          to={{
            pathname: this.props.linkToGo,
            // hash: "#sometag",
          }}
          onClick={this.playAudioHandler}
        >
          {this.props.children}
        </Link>
      </>
    );
  }
}

export default Button;

// CHILDREN:
// {props.children} WILL RECEIVE "CANCEL"
// <Button btnType="Danger">CANCEL</Button>
