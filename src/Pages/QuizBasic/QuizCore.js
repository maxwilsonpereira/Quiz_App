import React, { Component } from 'react';

import QuestionValidator from './QuestionValidator';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import soundCorrect from '../../assets/sounds/correct.mp3';
import soundWrong from '../../assets/sounds/wrong.mp3';

// IMPORTING THE QUESTION AUDIOS
// OBS: winQuestion1 MUST play after the FIRST question!
import winQuestion1 from '../../assets/audios/maria/win-question1.mp3';
import winQuestion2 from '../../assets/audios/maria/win-question2.mp3';
import winQuestion3 from '../../assets/audios/maria/win-question3.mp3';
import winQuestion4 from '../../assets/audios/maria/win-question4.mp3';
import looseQuestion1 from '../../assets/audios/maria/loose-question1.mp3';
import looseQuestion2 from '../../assets/audios/maria/loose-question2.mp3';
import looseQuestion3 from '../../assets/audios/maria/loose-question3.mp3';
import looseQuestion4 from '../../assets/audios/maria/loose-question4.mp3';
// IMPORTING THE QUESTION AUDIOS IN ENGLISH
// OBS: winQuestion1 MUST play after the FIRST question!
import winQuestion1En from '../../assets/audios/maria/english/win-question1en.mp3';
import winQuestion2En from '../../assets/audios/maria/english/win-question2en.mp3';
import winQuestion3En from '../../assets/audios/maria/english/win-question3en.mp3';
import winQuestion4En from '../../assets/audios/maria/english/win-question4en.mp3';
import looseQuestion1En from '../../assets/audios/maria/english/loose-question1en.mp3';
import looseQuestion2En from '../../assets/audios/maria/english/loose-question2en.mp3';
import looseQuestion3En from '../../assets/audios/maria/english/loose-question3en.mp3';
import looseQuestion4En from '../../assets/audios/maria/english/loose-question4en.mp3';

// const winQuestions = [winQuestion2, winQuestion3, winQuestion4];
// const looseQuestions = [looseQuestion2, looseQuestion3, looseQuestion4];

class QuizCore extends Component {
  state = {
    questionNumber: 0,
    countRightAnswers: 0,
    countWrongAnswers: 0,
    dontShow: 'DontShow',
    showNextButton: false,
    showBackdrop: false,
    radioBtnType: null,
    mutedApp: false,
    muteContBtnFunc: false,
    fontColor: '',
    showExtraFrameBox: 'DontShow',
    mariaSantaCurrent: 0,
    imageQuizCurrent: 0,
    extraInfoLooseShow: null,
    extraInfoWinShow: null,
    MobileDontShow: null,
    songsQuiz: null,
    currentSong: 0,
    playingSong: null,
    ShowBtnPlaySong: 'DontShow',
    winQuestions: [],
    looseQuestions: [],
  };

  componentWillMount() {
    // alert("componentWillMount");
    if (this.props.songsQuiz) {
      // IF PAGE RELOADED, GO TO INTRO
      // This is necessary to force playing the 1st song again
      // if (window.performance) {
      //   if (performance.navigation.type == 1) {
      //     // alert("This page is reloaded");
      //     window.location.href = this.props.linkToPageIntro;
      //   } else {
      //     // alert("This page is not reloaded");
      //   }
      // }
      this.setState({
        songsQuiz: [
          new Audio(this.props.songsQuiz[0]),
          new Audio(this.props.songsQuiz[1]),
          new Audio(this.props.songsQuiz[2]),
          new Audio(this.props.songsQuiz[3]),
          new Audio(this.props.songsQuiz[4]),
          new Audio(this.props.songsQuiz[5]),
          new Audio(this.props.songsQuiz[6]),
          new Audio(this.props.songsQuiz[7]),
          new Audio(this.props.songsQuiz[8]),
          new Audio(this.props.songsQuiz[9]),
        ],
        ShowBtnPlaySong: 'BtnPlaySong',
      });
    } else {
      this.setState({
        songsQuiz: [null, null, null, null, null, null, null, null, null, null],
      });
    }
    if (this.props.itsEnglishQuiz) {
      this.setState({
        winQuestions: [winQuestion2En, winQuestion3En, winQuestion4En],
        looseQuestions: [looseQuestion2En, looseQuestion3En, looseQuestion4En],
      });
    } else {
      this.setState({
        winQuestions: [winQuestion2, winQuestion3, winQuestion4],
        looseQuestions: [looseQuestion2, looseQuestion3, looseQuestion4],
      });
    }
  }
  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.onBackButtonEvent);
  };
  componentDidMount() {
    if (this.props.songsQuiz) {
      console.log('componentDidMount');
      // this.playFirstSong();
    }
    // Recognizing BACK BROWSER BUTTON and executing function
    // to pause the audio (the event MUST the removed on
    // componentWillUnmount):
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', this.onBackButtonEvent);
  }
  onBackButtonEvent = (e) => {
    // e.preventDefault();
    // alert("Back Button Pressed!");
    window.history.back();
    if (this.state.songsQuiz[this.state.currentSong]) {
      this.state.songsQuiz[this.state.currentSong].pause();
    }
  };

  playFirstSong = () => {
    this.state.songsQuiz[this.state.currentSong].play();
    this.setState({ ShowBtnPlaySong: 'DontShow' });
  };
  pauseAndPlaySongHandler = () => {
    this.state.songsQuiz[this.state.currentSong].pause();
    const oldSong = this.state.currentSong;
    const nextSong = oldSong + 1;
    this.setState({ currentSong: nextSong });
    this.state.songsQuiz[this.state.currentSong].play();
    // alert("INSIDE pauseSongHandler! nextSong: " + nextSong);
    // alert("this.state.countWrongAnswers: " + this.state.countWrongAnswers);
  };

  playAudioHandler = (props) => {
    let audio = new Audio(props);
    audio.play();
  };
  playWrongSound() {
    if (this.state.mutedApp) {
      return;
    }
    let audio = new Audio(soundWrong);
    audio.play();
  }
  playCorrectSound() {
    if (this.state.mutedApp) {
      return;
    }
    let audio = new Audio(soundCorrect);
    audio.play();
  }
  muteAndUnmute = () => {
    console.log('MUTING...');
    this.setState({
      mutedApp: !this.state.mutedApp,
      muteContBtnFunc: !this.state.muteContBtnFunc,
    });
  };

  validateAnswerHandler = (props) => {
    // IF ANSWER IS RIGHT:
    if (props === this.props.questions[this.state.questionNumber].answer) {
      if (this.state.questionNumber === 0) {
        if (this.props.itsEnglishQuiz) {
          this.playAudioHandler(winQuestion1En);
        } else {
          this.playAudioHandler(winQuestion1);
        }
      } else {
        if (
          this.state.questionNumber === 3 ||
          this.state.questionNumber === 5 ||
          this.state.questionNumber === 7
        ) {
          //RAMDOM: console.log(getRandomInt(3)); output: 0, 1 or 2
          let ramdomNum = Math.floor(Math.random() * Math.floor(3));
          this.playAudioHandler(this.state.winQuestions[ramdomNum]);
        }
      }
      const oldCountRightAns = this.state.countRightAnswers;
      const updatedWrite = oldCountRightAns + 1;
      this.setState({
        radioBtnSound: soundCorrect,
        countRightAnswers: updatedWrite,
        dontShow: 'BtnRight',
        showBackdrop: true,
        radioBtnType: 'RadioContainerCorrect',
        fontColor: 'GreenCorrectFont',
        showExtraFrameBox: 'DontShow',
        extraInfoLooseShow: null,
        extraInfoWinShow:
          this.props.questions[this.state.questionNumber].extraInfoWin,
      });
      // NEXT IF to JUST SHOW the extraInfoWin if it exists (true)
      if (this.props.questions[this.state.questionNumber].extraInfoWin) {
        this.setState({
          showExtraFrameBox: 'ShowFrameExtraInfo',
        });
      }
      console.log('RIGHT ANSWER!');
      this.playCorrectSound();
    }
    // ELSE, WHEN ANSWER IS WRONG:
    else {
      if (this.state.questionNumber === 0) {
        if (this.props.itsEnglishQuiz) {
          this.playAudioHandler(looseQuestion1En);
        } else {
          this.playAudioHandler(looseQuestion1);
        }
      } else {
        if (
          (this.state.questionNumber === 3 ||
            this.state.questionNumber === 5 ||
            this.state.questionNumber === 7) &&
          this.state.countWrongAnswers !== this.props.wrongAnswerAllowed - 1
        ) {
          //RAMDOM: console.log(getRandomInt(3)); output: 0, 1 or 2
          let ramdomNum = Math.floor(Math.random() * Math.floor(3));
          this.playAudioHandler(this.state.looseQuestions[ramdomNum]);
        }
      }
      const oldCountWrongAns = this.state.countWrongAnswers;
      const updatedWrong = oldCountWrongAns + 1;
      this.setState({
        radioBtnSound: soundCorrect,
        dontShow: 'BtnWrong',
        showBackdrop: true,
        radioBtnType: 'RadioContainerWrong',
        fontColor: 'RedWrongFont',
        countWrongAnswers: updatedWrong,
        // showExtraFrameBox: 'ShowFrameExtraInfo',
        mariaSantaCurrent: updatedWrong,
        showExtraFrameBox: 'DontShow',
        extraInfoWinShow: null,
        extraInfoLooseShow:
          this.props.questions[this.state.questionNumber].extraInfoLoose,
      });
      // NEXT IF to JUST SHOW the extraInfoLoose if it exists (true)
      if (this.props.questions[this.state.questionNumber].extraInfoLoose) {
        this.setState({
          showExtraFrameBox: 'ShowFrameExtraInfo',
        });
      }
      this.playWrongSound();
    }
    this.setState({
      MobileDontShow: 'MobileDontShow',
      ShowBtnPlaySong: 'DontShow',
    });
  };

  goToNextHandler = () => {
    const oldQuestionNumber = this.state.questionNumber;
    const updatedNumber = oldQuestionNumber + 1;
    // Next IF will call pauseSongHandler JUST IF songsQuiz exist
    if (this.props.songsQuiz) {
      this.pauseAndPlaySongHandler();
    }
    this.setState({
      questionNumber: updatedNumber,
      imageQuizCurrent: updatedNumber,
      dontShow: 'DontShow',
      showBackdrop: false,
      MobileDontShow: null,
    });
  };

  render() {
    let getAnswers = [];
    getAnswers[0] = this.props.questions[this.state.questionNumber].optiona;
    getAnswers[1] = this.props.questions[this.state.questionNumber].optionb;
    getAnswers[2] = this.props.questions[this.state.questionNumber].optionc;
    getAnswers[3] = this.props.questions[this.state.questionNumber].optiond;

    return (
      <>
        {/* The BACKDROP is being used to don't allow user to 
        click anywhere, BUT the PRÓXIMA PERGUNTA button.
        Achieved with z-index. ButtonCSS z-index: 200;
        Backdrop z-index: 100; */}
        <Backdrop show={this.state.showBackdrop} />
        <QuestionValidator
          questionNumber={this.state.questionNumber}
          countRightAnswers={this.state.countRightAnswers}
          countWrongAnswers={this.state.countWrongAnswers}
          totalQuestions={this.props.totalQuestions}
          correctAnswer={this.props.questions[this.state.questionNumber].answer}
          text1={this.props.questions[this.state.questionNumber].text1}
          text2={this.props.questions[this.state.questionNumber].text2}
          extraInfoWin={this.state.extraInfoWinShow}
          extraInfoLoose={this.state.extraInfoLooseShow}
          showExtraFrameBox={this.state.showExtraFrameBox}
          totalAnswers={
            this.props.questions[this.state.questionNumber].totalAnswers
          }
          options={getAnswers}
          validate={this.validateAnswerHandler}
          dontShow={this.state.dontShow}
          goToNext={this.goToNextHandler}
          radioBtnType={this.state.radioBtnType}
          muteAndUnmute={this.muteAndUnmute}
          muteContBtnFunc={this.state.muteContBtnFunc}
          fontColor={this.state.fontColor}
          finalizeQuiz={this.finalizeQuiz}
          mariaSanta={this.props.mariaSanta}
          mariaSantaCurrent={this.state.mariaSantaCurrent}
          imagesQuiz={this.props.imagesQuiz}
          imageQuizCurrent={this.state.imageQuizCurrent}
          videosQuiz={this.props.videosQuiz}
          finalMessageWin={this.props.finalMessageWin}
          finalMessageWinTotal={this.props.finalMessageWinTotal}
          finalMessageLoose={this.props.finalMessageLoose}
          MobileDontShow={this.state.MobileDontShow}
          linkToPage={this.props.linkToPage}
          playingSong={this.state.songsQuiz[this.state.currentSong]}
          // playingSong={this.state.playingSong}
          itsSongsQuiz={this.props.itsSongsQuiz}
          wrongAnswerAllowed={this.props.wrongAnswerAllowed}
          playFirstSong={this.playFirstSong}
          ShowBtnPlaySong={this.state.ShowBtnPlaySong}
          quizLogo={this.props.quizLogo}
          linkToMenu={this.props.linkToMenu}
          itsEnglishQuiz={this.props.itsEnglishQuiz}
          audioCurrent={this.state.songsQuiz[this.state.currentSong]}
        />
      </>
    );
  }
}

export default QuizCore;
