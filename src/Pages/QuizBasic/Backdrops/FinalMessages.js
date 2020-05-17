import React, { Component } from "react";

import classes from "../../../../src/Pages/Pages.module.css";

class FinalMessages extends Component {
  messagesToPrint = () => {
    if (this.props.messages[3]) {
      return (
        <h1 className={classes.IntroText}>
          <span className={classes.FontColorBlueLight}>
            {this.props.messages[0]}
            <br />
            {this.props.messages[1]}
          </span>
          <br />
          {this.props.messages[2]}
          <br />
          {this.props.messages[3]}
          <br />
        </h1>
      );
    } else if (this.props.messages[2]) {
      return (
        <h1 className={classes.IntroText}>
          <span className={classes.FontColorBlueLight}>
            {this.props.messages[0]}
          </span>
          <br />
          {this.props.messages[1]}
          <br />
          {this.props.messages[2]}
          <br />
        </h1>
      );
    } else {
      return (
        <h1 className={classes.IntroText}>
          <span className={classes.FontColorBlueLight}>
            {this.props.messages[0]}
          </span>
          <br />
          {this.props.messages[1]}
          <br />
        </h1>
      );
    }
  };
  render() {
    return this.messagesToPrint();
  }
}

export default FinalMessages;
