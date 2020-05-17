import React, { Component } from "react";

import logo from "../../assets/logos/canal-logo.png";
import classes from "../Pages.module.css";
import Button from "../../components/UI/Button/Button";
import MariaSantaIntro from "../../assets/images/maria/maria-intro.png";

class HomePage extends Component {
  render() {
    return (
      <>
        <span className={classes.centered}>
          <img
            src={logo}
            className={[
              classes.responsive,
              classes.MarginTop30,
              classes.LogoIntro,
            ].join(" ")}
            alt="QUIZ"
          />
        </span>
        <div className={classes.centered}>
          <img
            src={MariaSantaIntro}
            className={classes.responsiveMariaIntro}
            alt="Maria Santa"
          />
        </div>
        <h1
          className={[
            classes.IntroText,
            classes.IntroTextTitle,
            classes.FontColorGreen,
            classes.MarginTop30,
          ].join(" ")}
        >
          SEJAM BEM-VINDOS!
          <br />
          <div
            className={[classes.MarginTop10, classes.OnlyShowMobile].join(" ")}
          ></div>
          <span className={classes.FontColorYellow}>WELCOME!</span>
        </h1>
        <br />
        <span className={classes.centered}>
          <div className={classes.FlexBoxParent}>
            <div className={classes.FlexBoxChild}>
              <Button linkToGo="/introportugues" btnType="BtnMiddleSizeGreen">
                PORTUGUÊS
              </Button>
            </div>
            <div className={classes.FlexBoxChild}>
              <Button linkToGo="/introenglish" btnType="BtnMiddleSizeYellow">
                ENGLISH
              </Button>
            </div>
          </div>
        </span>
      </>
    );
  }
}

export default HomePage;
