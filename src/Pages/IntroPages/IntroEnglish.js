import React, { Component } from "react";

import logo from "../../assets/logos/canal-logo.png";
import classes from "../Pages.module.css";
import Button from "../../components/UI/Button/Button";

class introEnglish extends Component {
  render() {
    return (
      <>
        <br />
        <img src={logo} className={classes.responsive} alt="QUIZ" />
        {/* EINSTEIN'S IQ TEST */}
        {/* <h1
          className={[
            classes.IntroText,
            classes.IntroTextTitle,
            classes.IntroTextTitleEn,
            classes.YellowFont,
          ].join(" ")}
        >
          EINSTEIN'S IQ TEST (NEW)
        </h1>
        <br /> */}
        {/* <br className={classes.MobileDontShow} /> */}
        {/* <div className={classes.centered}>
          <div className={classes.FlexboxLimiter}>
            <div className={classes.FlexBoxParent}>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/einsteinintro-en" btnType="BtnFullRed">
                  PLAY
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br /> */}

        {/* QUIZ GAMES: */}
        <h1
          className={[
            classes.IntroText,
            classes.IntroTextTitle,
            classes.IntroTextTitleEn,
            classes.YellowFont,
          ].join(" ")}
        >
          WHICH QUIZ DO YOU WANT TO PLAY?
        </h1>
        {/* <h1 className={classes.IntroText}>
          Chegou a hora da Maria Santa testar os seus conhecimentos de uma forma
          divertida!
        </h1> */}
        <br />
        {/* <br className={classes.MobileDontShow} /> */}
        <div className={classes.centered}>
          <div className={classes.FlexboxLimiter}>
            <div className={classes.FlexBoxParent}>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/moviequizintro-en" btnType="BtnFullYellow">
                  MOVIE
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/operaquizintro-en" btnType="BtnFullGreen">
                  OPERA
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/musicalquizintro-en" btnType="BtnFullOrange">
                  MUSICAL
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/tenorquizintro-en" btnType="BtnFullBlue">
                  WHO IS THE TENOR
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/voicequizintro-en" btnType="BtnFullPurple">
                  GUESS THE VOICE
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/englishquizintro-en" btnType="BtnFullRed">
                  ENGLISH TEST
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <span className={classes.centered}>
          <Button linkToGo="/" btnType="BtnNotFullBlue">
            INTRO
          </Button>
        </span>
        <br />
        <span className={classes.centered}>
          <h3
            className={[classes.MarginTop30, classes.ColorAnimation].join(" ")}
          >
            Developed by Max Wilson Pereira
          </h3>
        </span>
      </>
    );
  }
}

export default introEnglish;
