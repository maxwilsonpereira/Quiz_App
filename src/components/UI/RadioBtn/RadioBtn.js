import React, { Component } from "react";

import classes from "./RadioBtn.module.css";
import clickSound from "../../../assets/sounds/click.mp3";
// import correctSound from "../../../assets/sounds/correct.mp3";
// import wrongSound from "../../../assets/sounds/wrong.mp3";

class RadioBtn extends Component {
  goToNext = (event) => {
    this.props.change();
  };

  render() {
    return (
      <>
        <audio className="audio-radio-btn">
          <source src={clickSound}></source>
        </audio>
        <div>
          <label
            className={[
              classes.RadioContainer,
              classes[this.props.radioBtnType],
            ].join(" ")}
          >
            <input
              // type="radio"
              // readyOnly BLOCK ALL the keys!
              // I used because the function was being trigged
              // any time [ENTER] or [SPACE] was pressed.
              type="text"
              readOnly
              onClick={this.goToNext}
              value="option1"
            />
            <div className={classes.RadioCheckbox}></div>
          </label>
          <h3 className={classes.RadioBtnText}>{this.props.children}</h3>
        </div>
      </>
    );
  }
}

export default RadioBtn;

// CHILDREN:
// {props.children} WILL RECEIVE "CANCEL"
// <Button btnType="Danger">CANCEL</Button>
