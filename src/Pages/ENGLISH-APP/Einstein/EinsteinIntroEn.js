import React from "react";

import quizLogo from "../../../assets/logos/einstein.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const EinsteinIntroEn = () => {
  return (
    <>
      <br />
      <img src={quizLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        ARE YOU REALLY SMART?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        Albert Einstein created this IQ test (logical reasoning) in the last
        century and said that 98% of the world population is not able to solve
        it. <br />
      </h1>
      {/* <h1
          className={[
            classes.IntroText,
            classes.TextAmarelo,
            classes.MarginTop,
          ].join(" ")}
        >
          Um jogo para toda a família!
        </h1> */}
      <h1
        className={[
          classes.TextRed,
          classes.MarginTop,
          classes.LineHightLess,
        ].join(" ")}
      >
        Are you ready to try?
      </h1>
      <br />
      <h1
        className={[
          classes.TextBranco,
          classes.LineHightLess,
          classes.MarginLeftRight20,
        ].join(" ")}
      >
        Good luck!
      </h1>
      <br />
      <div className={classes.FlexBoxParentColumn}>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/einstein-en" btnType="BtnNotFullGreen">
            START
          </Button>
        </div>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/introenglish" btnType="BtnNotFullYellow">
            MENU
          </Button>
        </div>
      </div>
    </>
  );
};

export default EinsteinIntroEn;
