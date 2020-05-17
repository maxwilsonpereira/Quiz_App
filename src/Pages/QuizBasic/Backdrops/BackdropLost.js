import React, { Component } from "react";

import classes from "./BackdropEndQuiz.module.css";
import Button from "../../../components/UI/Button/Button";
import ButtonRefresh from "../../../components/UI/Button/ButtonRefresh";
// IMPORTING THE FINAL IMAGES:
import imgLoose1 from "../../../../src/assets/images/maria/imgLoose1.png";
import imgLoose2 from "../../../../src/assets/images/maria/imgLoose2.png";
import imgLoose3 from "../../../../src/assets/images/maria/imgLoose3.png";
// IMPORTING THE FINAL MESSAGE AUDIOS:
import loose1 from "../../../../src/assets/audios/maria/loose1.mp3";
import loose2 from "../../../../src/assets/audios/maria/loose2.mp3";
import loose3 from "../../../../src/assets/audios/maria/loose3.mp3";
import loose4 from "../../../../src/assets/audios/maria/loose4.mp3";
// IMPORTING THE FINAL MESSAGE AUDIOS IN ENGLISH:
import loose1En from "../../../../src/assets/audios/maria/english/loose1en.mp3";
import loose2En from "../../../../src/assets/audios/maria/english/loose2en.mp3";
import loose3En from "../../../../src/assets/audios/maria/english/loose3en.mp3";
import loose4En from "../../../../src/assets/audios/maria/english/loose4en.mp3";
// IMPORTING FINAL TEXT MESSAGE COMPONENT
import FinalMessages from "./FinalMessages";

class BackdropLost extends Component {
  state = {
    loseAudios: [loose1, loose2, loose3, loose4],
    loseAudiosEnglish: [loose1En, loose2En, loose3En, loose4En],
    looseImages: [imgLoose1, imgLoose2, imgLoose3],
    imgLooseFinal: null,
    playAgainBtn: "",
  };
  componentDidMount() {
    //RAMDOM: console.log(getRandomInt(4)); output: 0, 1, 2 or 3
    let ramdomNum = Math.floor(Math.random() * Math.floor(4));
    if (this.props.itsEnglishQuiz) {
      let audio = new Audio(this.state.loseAudiosEnglish[ramdomNum]);
      audio.play();
      this.setState({
        playAgainBtn: "PLAY AGAIN",
      });
    } else {
      let audio = new Audio(this.state.loseAudios[ramdomNum]);
      audio.play();
      this.setState({
        playAgainBtn: "JOGAR DE NOVO",
      });
    }
    // RANDOM FINAL IMAGE:
    let ramdomNumImg = Math.floor(Math.random() * Math.floor(3));
    this.setState({
      imgLooseFinal: this.state.looseImages[ramdomNumImg],
    });
  }
  render() {
    return (
      <div className={classes.BackdropLost}>
        <div className={classes.Container}>
          <br className={classes.MobileDontShow} />
          {/* IMAGE OF MARIA SANTA */}
          <img
            src={this.state.imgLooseFinal}
            className={classes.FinalImage}
            alt=""
          />
          <FinalMessages messages={this.props.finalMessageLoose} />
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

export default BackdropLost;
