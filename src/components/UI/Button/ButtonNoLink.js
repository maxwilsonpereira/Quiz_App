import React, { Component } from "react";

// import { Link } from "react-router-dom";
// <Link to="/whatever">Whatever</Link>
// <Link to={{
//   pathname: "/whatever",
//   hash: "#sometag"
// }}>Some Page</Link>

import classes from "./Button.module.css";
import clickSound from "../../../assets/sounds/click.mp3";

// YOU SHOULD USE WITH LINK!
//

class Button extends Component {
  playAudioHandler = () => {
    let audio = new Audio(clickSound);
    audio.play();
    const waitSecs = 200;
    setTimeout(() => {
      window.location.href = this.props.linkToGo;
    }, waitSecs);
  };
  //  window.location.href will make the page refresh

  render() {
    return (
      <>
        <audio className="btn-audio-element">
          <source src={clickSound}></source>
        </audio>
        <button
          onClick={this.playAudioHandler}
          className={[classes.Button, classes[this.props.btnType]].join(" ")}
          // join() to transform the array in a string
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;

// CHILDREN:
// {props.children} WILL RECEIVE "CANCEL"
// <Button btnType="Danger">CANCEL</Button>
