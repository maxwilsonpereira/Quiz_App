import React from "react";

import voiceLogo from "../../../assets/logos/vozes-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const voiceQuizIntro = () => {
  return (
    <>
      <br />
      <img src={voiceLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        DE QUEM É A VOZ?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        A voz da Maria Santa é muito marcante, muito fácil de ser reconhecida.
        <br />E as próximas 10 vozes, será que você reconhece?
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
        Boa sorte!
      </h1>
      <br />
      <div className={classes.FlexBoxParentColumn}>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/voicequiz" btnType="BtnNotFullGreen">
            JOGAR
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

export default voiceQuizIntro;
