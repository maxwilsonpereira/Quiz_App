import React, { Component } from "react";

import logo from "../../assets/logos/canal-logo.png";
import classes from "../Pages.module.css";
import Button from "../../components/UI/Button/Button";

class introPortugues extends Component {
  render() {
    return (
      <>
        <br />
        <img src={logo} className={classes.responsive} alt="QUIZ" />
        <h1
          className={[
            classes.IntroText,
            classes.IntroTextTitle,
            classes.YellowFont,
          ].join(" ")}
        >
          QUAL QUIZ VOCÊ QUER JOGAR?
        </h1>
        {/* <h1 className={classes.IntroText}>
          Chegou a hora da Maria Santa testar os seus conhecimentos de uma forma
          divertida!
        </h1> */}
        <br />
        <br className={classes.MobileDontShow} />
        <div className={classes.centered}>
          <div className={classes.FlexboxLimiter}>
            <div className={classes.FlexBoxParent}>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/musicalquizintro" btnType="BtnFullYellow">
                  QUAL É O MUSICAL
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/tenorquizintro" btnType="BtnFullGreen">
                  QUEM É O TENOR
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/operaquizintro" btnType="BtnFullOrange">
                  QUAL É A OPERA
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/moviequizintro" btnType="BtnFullBlue">
                  QUAL É O FILME
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/voicequizintro" btnType="BtnFullPurple">
                  DE QUEM É A VOZ
                </Button>
              </div>
              <div className={classes.FlexBoxChild}>
                <Button linkToGo="/englishquizintro" btnType="BtnFullRed">
                  TESTE DE INGLÊS
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
            Desenvolvido por Max Wilson Pereira
          </h3>
        </span>
      </>
    );
  }
}

export default introPortugues;
