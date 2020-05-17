import React from "react";

import englishLogo from "../../../assets/logos/english-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const englishQuizIntro = () => {
  return (
    <>
      <br />
      <img src={englishLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        DO YOU SPEAK ENGLISH?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        Chegou a hora da Maria Santa testar os seus conhecimentos da lingua
        inglesa!
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
        Se você errar a Maria Santa vai se irritar!
      </h1>
      <br />
      <h1
        className={[
          classes.TextBranco,
          classes.LineHightLess,
          classes.MarginLeftRight20,
        ].join(" ")}
      >
        Em que nível você quer jogar?
      </h1>
      <br />
      <div className={classes.FlexBoxParentColumn}>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/englishquizeasy" btnType="BtnNotFullGreen">
            FÁCIL
          </Button>

          <Button linkToGo="/englishquizhard" btnType="BtnNotFullRed">
            DIFÍCIL
          </Button>
        </div>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/introportugues" btnType="BtnNotFullYellow">
            MENU
          </Button>
        </div>
      </div>
    </>
  );
};

export default englishQuizIntro;
