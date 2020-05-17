import React, { Component } from "react";

import classes from "../../Pages/Pages.module.css";
import ButtonFunction from "../../../src/components/UI/Button/ButtonFunction";
import Button from "../../../src/components/UI/Button/Button";
import RadioBtn from "../../../src/components/UI/RadioBtn/RadioBtn";
import muteLogo from "../../../src/assets/images/mute.png";
import unmuteLogo from "../../../src/assets/images/unmute.png";
import BackdropLost from "./Backdrops/BackdropLost";
import BackdropWin from "./Backdrops/BackdropWin";
// YOUTUBE VIDEOS: npm install react-youtube
// https://www.npmjs.com/package/react-youtube
// OPTIONS FOR THE YOUTUBE PLAYER:
// https://developers.google.com/youtube/player_parameters
import YouTube from "react-youtube";
// DELAY: npm i react-delay
// https://www.npmjs.com/package/react-delay
import Delay from "react-delay";

const englishPlacar = [];
const postuguesPlacar = [];
englishPlacar[0] = "QUESTION: ";
englishPlacar[1] = "CORRECT: ";
englishPlacar[2] = "WRONG: ";
postuguesPlacar[0] = "PERGUNTA: ";
postuguesPlacar[1] = "ACERTOS: ";
postuguesPlacar[2] = "ERROS: ";

class QuestionValidator extends Component {
  state = {
    toggleMute: false,
    muteUnmute: muteLogo,
    placarMensagens: [],
    nextQuestionText: "",
  };
  // componentWillUpdate() {
  //   if (this.props.playingSong.pause()) {
  //     this.props.playingSong.pause();
  //   }
  // }
  componentDidMount() {
    if (this.props.itsEnglishQuiz) {
      this.setState({
        placarMensagens: englishPlacar,
        nextQuestionText: "NEXT",
      });
    } else {
      this.setState({
        placarMensagens: postuguesPlacar,
        nextQuestionText: "PRÓXIMA",
      });
    }
  }

  toggleStateHandler = () => {
    if (this.state.muteUnmute === muteLogo) {
      this.setState({
        muteUnmute: unmuteLogo,
      });
    } else {
      this.setState({
        muteUnmute: muteLogo,
      });
    }
    // FUNC received to mute the sound on Parent Component
    this.props.muteAndUnmute();
  };

  showMediaHandler = () => {
    // RETURNING IMAGE, IF IMAGE QUIZ:
    if (this.props.imagesQuiz) {
      return (
        <img
          src={this.props.imagesQuiz[this.props.imageQuizCurrent]}
          className={[classes.responsive, classes.ImageQuestion].join(" ")}
          alt="English Quiz"
        />
      );
    } else if (this.props.videosQuiz) {
      // RETURNING VIDEO, IF VIEO QUIZ:
      // playsinline: 1 - DON'T GO! FULLSCREEN
      const opts = {
        // height: "240",
        // width: "600",
        playerVars: {
          autoplay: 1,
          controls: 0,
          fs: 0,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 1,
        },
      };
      return (
        <>
          <div className={classes.YoutubeContainer}>
            <YouTube
              className={classes.ResponsiveYoutube}
              videoId={this.props.videosQuiz[this.props.imageQuizCurrent]}
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </>
      );
    }
  };

  render() {
    let getAnswers = [];
    let finalScore = 1;
    for (let i = 0; i < this.props.totalAnswers; i++) {
      getAnswers[i] = "EGAL!";
    }

    // FINALIZING THE QUIZ FOR LOSE CASE:
    if (this.props.countWrongAnswers === this.props.wrongAnswerAllowed) {
      // PAUSING song IF song exists (IF itsSongsQuiz is TRUE)
      if (this.props.itsSongsQuiz) {
        this.props.playingSong.pause();
      }
      return (
        <div>
          <BackdropLost
            finalMessageLoose={this.props.finalMessageLoose}
            linkToPage={this.props.linkToPage}
            itsEnglishQuiz={this.props.itsEnglishQuiz}
          />
        </div>
      );
    }

    // FINALIZING THE QUIZ FOR WIN CASE:
    if (
      this.props.totalQuestions ===
      this.props.countWrongAnswers + this.props.countRightAnswers
    ) {
      // PAUSING song IF song exists (IF itsSongsQuiz is TRUE)
      if (this.props.itsSongsQuiz) {
        this.props.playingSong.pause();
      }
      finalScore = (
        (this.props.countRightAnswers / this.props.totalQuestions) *
        100
      ).toFixed();
      if (finalScore == 100) {
        return (
          <Delay wait={100}>
            <div>
              <BackdropWin
                finalScore={finalScore}
                finalMessageWin={this.props.finalMessageWinTotal}
                totalQuestions={this.props.totalQuestions}
                linkToPage={this.props.linkToPage}
                itsEnglishQuiz={this.props.itsEnglishQuiz}
              />
            </div>
          </Delay>
        );
      } else
        return (
          <Delay wait={100}>
            <div>
              <BackdropWin
                finalScore={finalScore}
                finalMessageWin={this.props.finalMessageWin}
                totalQuestions={this.props.totalQuestions}
                linkToPage={this.props.linkToPage}
                itsEnglishQuiz={this.props.itsEnglishQuiz}
              />
            </div>
          </Delay>
        );
    }

    return (
      <>
        <br className={classes.MobileDontShow} />
        <img
          src={this.props.quizLogo}
          className={[classes.responsive, classes.LogoQuiz].join(" ")}
          alt="English Quiz"
        />
        <br className={classes.MobileDontShow} />
        <br />
        <div className={classes.CenterCorrection}>
          <div className={classes.MinusMarginTopMobile}>
            <div className={classes.FlexBox}>
              <div className={classes.FlexRight}>
                <div className={classes.FlexBoxColumn}>
                  <div className={classes.ChangeOrder}>
                    {/* IMAGE OF MARIA SANTA */}
                    <img
                      src={this.props.mariaSanta[this.props.mariaSantaCurrent]}
                      className={[classes.responsive, classes.ImageMaria].join(
                        " "
                      )}
                      alt="English Quiz"
                    />
                  </div>
                  {/* PLACAR ONLY DESKTOP: */}
                  <div
                    className={[
                      classes.FlexBoxPlacarRight,
                      classes.DesktopOnly,
                    ].join(" ")}
                  >
                    <h3 className={classes.TextPlacar}>
                      {this.state.placarMensagens[0]}{" "}
                      {this.props.questionNumber + 1} /{" "}
                      {this.props.totalQuestions}
                    </h3>
                    <span className={classes.GreenCorrectFont}>
                      {this.state.placarMensagens[1]}{" "}
                      {this.props.countRightAnswers}
                    </span>
                    <br />
                    <span
                      className={[
                        classes.RedWrongFont,
                        classes.SmallerSmallScreen,
                      ].join(" ")}
                    >
                      {this.state.placarMensagens[2]}{" "}
                      {this.props.countWrongAnswers} /{" "}
                      {this.props.wrongAnswerAllowed}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className={classes.FlexLeft}>
                {/* IMAGE / VIDEO TO SHOW ON EACH QUESTION */}
                {this.showMediaHandler()}

                {/* MUTE BUTTON IMAGE */}
                {/* <img
                  className={classes.ResponsiveMute}
                  onClick={this.toggleStateHandler}
                  src={this.state.muteUnmute}
                  alt=""
                /> */}
                <br />
                <br />

                {/* THE QUESTION: */}
                {/* <div className={classes.FlexBoxLogo}> */}
                <h2 className={classes.QuestionsMobile}>
                  {this.props.text1}
                  <button
                    className={classes[this.props.ShowBtnPlaySong]}
                    onClick={this.props.playFirstSong}
                  >
                    PLAY
                  </button>
                  <br />
                  {this.props.text2}
                </h2>
                {/* </div> */}
                {/* THE ANSWERS BUTTONS: */}
                <div
                  className={[
                    classes.MarginTop20,
                    classes[this.props.MobileDontShow],
                  ].join(" ")}
                >
                  {getAnswers.map((answer, index) => {
                    return (
                      <RadioBtn
                        type="bubmit"
                        key={index}
                        change={() => this.props.validate(index + 1)}
                        radioBtnType={this.props.radioBtnType}
                      >
                        {this.props.options[index]}
                      </RadioBtn>
                    );
                  })}
                </div>
                <div className={classes.MarginTop20}></div>

                {/* H3 FOR FRAME THE EXTRA INFOS AFTER BUTTON CLICKED */}
                <h3
                  className={[
                    classes[this.props.showExtraFrameBox],
                    classes[this.props.dontShow],
                  ].join(" ")}
                >
                  {this.props.extraInfoWin}
                  {this.props.extraInfoLoose}
                </h3>
                <div className={classes.MarginTop20}></div>

                {/* NEXT QUESTION BUTTON */}
                <span className={classes.centered}>
                  <ButtonFunction
                    // type="submit"
                    // value="submit form"
                    functionToExe={() => this.props.goToNext()}
                    btnType={this.props.dontShow}
                    muteContBtnFunc={this.props.muteContBtnFunc}
                  >
                    {this.state.nextQuestionText}
                  </ButtonFunction>
                </span>
              </div>
              {/* PLACAR ONLY MOBILE: */}
              <div
                className={[
                  classes.FlexBoxPlacarRight,
                  classes.FlexBoxPlacarMobile,
                ].join(" ")}
              >
                <h3
                  className={[
                    classes.FontColorYelllow,
                    classes.MarginBottom3,
                  ].join(" ")}
                >
                  {this.state.placarMensagens[0]}{" "}
                  {this.props.questionNumber + 1} / {this.props.totalQuestions}
                </h3>
                <h3>
                  <span className={classes.RedWrongFont}>
                    {this.state.placarMensagens[2]}{" "}
                    {this.props.countWrongAnswers} /{" "}
                    {this.props.wrongAnswerAllowed}
                  </span>
                </h3>
              </div>
            </div>
            <br />
            <span
              className={[classes.centered, classes.CorrectionQuizMargin].join(
                " "
              )}
            >
              <Button
                linkToGo={this.props.linkToMenu}
                btnType="BtnNotFullYellow"
                audioCurrent={this.props.audioCurrent}
              >
                MENU
              </Button>
            </span>
          </div>
        </div>
      </>
    );
  }
}
export default QuestionValidator;
