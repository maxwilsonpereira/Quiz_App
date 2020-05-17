import React, { Component } from "react";

import classes from "./BackdropEndQuiz.module.css";
import classesApp from "../../../../src/Pages/Pages.module.css";
import Button from "../../../components/UI/Button/Button";
import ButtonRefresh from "../../../components/UI/Button/ButtonRefresh";
// IMPORTING THE FINAL IMAGES:
import imgWin1 from "../../../../src/assets/images/maria/imgWin1.png";
import imgWin2 from "../../../../src/assets/images/maria/imgWin2.png";
import imgWinTotal from "../../../../src/assets/images/maria/imgWinTotal.png";
// IMPORTING THE FINAL MESSAGE AUDIOS:
import win1 from "../../../../src/assets/audios/maria/win1.mp3";
import win2 from "../../../../src/assets/audios/maria/win2.mp3";
import win3 from "../../../../src/assets/audios/maria/win3.mp3";
import win4 from "../../../../src/assets/audios/maria/win4.mp3";
import winTotal1 from "../../../../src/assets/audios/maria/winTotal1.mp3";
import winTotal2 from "../../../../src/assets/audios/maria/winTotal2.mp3";
import winTotal3 from "../../../../src/assets/audios/maria/winTotal3.mp3";
import winTotal4 from "../../../../src/assets/audios/maria/winTotal4.mp3";
// IMPORTING THE FINAL MESSAGE AUDIOS IN ENGLISH:
import win1En from "../../../../src/assets/audios/maria/english/win1en.mp3";
import win2En from "../../../../src/assets/audios/maria/english/win2en.mp3";
import win3En from "../../../../src/assets/audios/maria/english/win3en.mp3";
import win4En from "../../../../src/assets/audios/maria/english/win4en.mp3";
import winTotal1En from "../../../../src/assets/audios/maria/english/winTotal1en.mp3";
import winTotal2En from "../../../../src/assets/audios/maria/english/winTotal2en.mp3";
import winTotal3En from "../../../../src/assets/audios/maria/english/winTotal3en.mp3";
import winTotal4En from "../../../../src/assets/audios/maria/english/winTotal4en.mp3";
// IMPORTING FINAL TEXT MESSAGE COMPONENT
import FinalMessages from "./FinalMessages";

class BackdropWin extends Component {
  state = {
    winAudios: [win1, win2, win3, win4],
    winTotalAudios: [winTotal1, winTotal2, winTotal3, winTotal4],
    winAudiosEnglish: [win1En, win2En, win3En, win4En],
    winTotalAudiosEnglish: [winTotal1En, winTotal2En, winTotal3En, winTotal4En],
    winImages: [imgWin1, imgWin2],
    imgWinFinal: null,
    scoreMessage: "",
    playAgainBtn: "",
  };
  componentDidMount() {
    //RAMDOM: console.log(getRandomInt(4)); output: 0, 1, 2 or 3
    let ramdomNum = Math.floor(Math.random() * Math.floor(4));
    let ramdomNumImg = Math.floor(Math.random() * Math.floor(2));
    if (this.props.finalScore == 100) {
      if (this.props.itsEnglishQuiz) {
        let audio = new Audio(this.state.winTotalAudiosEnglish[ramdomNum]);
        audio.play();
      } else {
        let audio = new Audio(this.state.winTotalAudios[ramdomNum]);
        audio.play();
      }
      this.setState({
        imgWinFinal: imgWinTotal,
      });
    } else {
      if (this.props.itsEnglishQuiz) {
        let audio = new Audio(this.state.winAudiosEnglish[ramdomNum]);
        audio.play();
      } else {
        let audio = new Audio(this.state.winAudios[ramdomNum]);
        audio.play();
      }
      this.setState({
        imgWinFinal: this.state.winImages[ramdomNumImg],
      });
    }
    if (this.props.itsEnglishQuiz) {
      this.setState({
        scoreMessage: "SCORE: ",
        playAgainBtn: "PLAY AGAIN",
      });
    } else {
      this.setState({
        scoreMessage: "PLACAR: ",
        playAgainBtn: "JOGAR DE NOVO",
      });
    }
  }
  render() {
    // if (itsEnglishQuiz) {
    //   this.setState({
    //     scoreMessage,
    //   });
    // }
    return (
      <div className={classes.BackdropWin}>
        <div className={classes.Container}>
          <br className={classes.MobileDontShow} />
          {/* IMAGE OF MARIA SANTA */}
          <img
            src={this.state.imgWinFinal}
            className={classes.FinalImage}
            alt="English Quiz"
          />
          <FinalMessages messages={this.props.finalMessageWin} />
          <h1 className={classesApp.IntroText}>
            {this.state.scoreMessage} {this.props.finalScore}
            {" % "}
            {/* {" / "}
            {this.props.totalQuestions} */}
          </h1>
          <br />
          <ButtonRefresh
            linkToGo={this.props.linkToPage}
            btnType="BtnPlayAgain"
          >
            {this.state.playAgainBtn}
          </ButtonRefresh>
          <br />
          <Button linkToGo="/intro" btnType="BtnBackToHome">
            MENU
          </Button>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default BackdropWin;
