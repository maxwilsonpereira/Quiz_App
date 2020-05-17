import React from "react";

import musicalLogo from "../../../assets/logos/musical-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const musicalQuizIntro = () => {
  return (
    <>
      <br />
      <img src={musicalLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        VOCÊ AMA MUSICAIS?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        A Maria Santa ama!
        <br />
        Ela escolheu 10 músicas para testar os seus conhecimentos.
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
          <Button linkToGo="/musicalquiz" btnType="BtnNotFullGreen">
            INICIAR
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

export default musicalQuizIntro;
