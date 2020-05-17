import React from "react";

import quizLogo from "../../../assets/logos/movie-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const movieQuizIntro = () => {
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
        QUEM NÃO AMA UM BOM FILME?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        Se tem uma coisa que a Maria Santa ama é pegar um cineminha!
        <br />
        Chegou a hora dela testar se você também adora assistir filmes.
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
          <Button linkToGo="/moviequiz" btnType="BtnNotFullGreen">
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

export default movieQuizIntro;
