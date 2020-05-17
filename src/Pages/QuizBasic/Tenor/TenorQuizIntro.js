import React from "react";

import tenorLogo from "../../../assets/logos/tenor-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const tenorQuizIntro = () => {
  return (
    <>
      <br />
      <img src={tenorLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        QUEM É O TENOR?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        Para a Maria Santa, não há voz mais excitante do que a do tenor
        operístico!
        <br />
        Ela conhece todos! E você?
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
          <Button linkToGo="/tenorquiz" btnType="BtnNotFullGreen">
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

export default tenorQuizIntro;
