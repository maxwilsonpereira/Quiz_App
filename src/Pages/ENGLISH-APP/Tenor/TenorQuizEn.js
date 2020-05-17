import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/tenor-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";
//IMPORTING THE IMAGES:
import img1 from "../../../assets/images/tenorquiz/img1.png";
// import img2 from "../../../assets/images/tenorquiz/img2.png";
// import img3 from "../../../assets/images/tenorquiz/img3.png";
// import img4 from "../../../assets/images/tenorquiz/img4.png";
// import img5 from "../../../assets/images/tenorquiz/img5.png";
// import img6 from "../../../assets/images/tenorquiz/img6.png";
// import img7 from "../../../assets/images/tenorquiz/img7.png";
// import img8 from "../../../assets/images/tenorquiz/img8.png";
// import img9 from "../../../assets/images/tenorquiz/img9.png";
// import img10 from "../../../assets/images/tenorquiz/img10.png";
// IMPORTING THE SONGS:
import song1 from "../../../assets/audios/tenorquiz/song1.mp3";
import song2 from "../../../assets/audios/tenorquiz/song2.mp3";
import song3 from "../../../assets/audios/tenorquiz/song3.mp3";
import song4 from "../../../assets/audios/tenorquiz/song4.mp3";
import song5 from "../../../assets/audios/tenorquiz/song5.mp3";
import song6 from "../../../assets/audios/tenorquiz/song6.mp3";
import song7 from "../../../assets/audios/tenorquiz/song7.mp3";
import song8 from "../../../assets/audios/tenorquiz/song8.mp3";
import song9 from "../../../assets/audios/tenorquiz/song9.mp3";
import song10 from "../../../assets/audios/tenorquiz/song10.mp3";

// ON PAGE REFRESH GO TO BEGINNING!!
const tenorQuizEn = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/tenorquiz-en";
  const linkToPageIntro = "/tenorquizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "You must love the tenors!",
    "How about playing again to try to get all the questions right?",
  ];
  const finalMessageWinTotal = [
    "BRAVISSIMO!",
    "FOR SURE YOU LOVE THE TENORS LIKE MARIA SANTA!",
    null,
  ];
  const finalMessageLoose = [
    "YOU LOST!",
    "DON'T LOSE YOUR MOTIVATION!",
    "Maria Santa will calm down very soon!",
    "How about playing one more time?",
  ];

  const videosQuiz = null;
  const itsSongsQuiz = true;
  //   const songsQuiz = null;
  const songsQuiz = [
    song1,
    song2,
    song3,
    song4,
    song5,
    song6,
    song7,
    song8,
    song9,
    song10,
  ];
  //   const imagesQuiz = null;
  const imagesQuiz = [
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
  ];
  const questions = [
    {
      // Question 1
      answer: 3,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose:
        "If you missed the easiest one, I highly doubt you will make it to the end!",
      extraInfoWin: "This was easy! Let's see if you will know the next!",

      totalAnswers: 4,
      optiona: "Placido Domingo",
      optionb: "José Carreras",
      optionc: "Luciano Pavarotti",
      optiond: "Andrea Bocelli",
    },
    {
      // Question 2
      answer: 1,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: "Did you think that there were only The Three Tenors?",
      extraInfoWin: "Maria Santa loves a dramatic tenor!",
      totalAnswers: 4,
      optiona: "Mario Del Monaco",
      optionb: "Tito Schipa",
      optionc: "Placido Domingo",
      optiond: "Jon Vickers",
    },
    {
      // Question 3
      answer: 3,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: "Missing like this, you won't reach till the end!",
      extraInfoWin: '"Je crois entendre encore" always makes Maria Santa cry!',
      totalAnswers: 4,
      optiona: "Juan Diego Flórez",
      optionb: "Fritz Wunderlich",
      optionc: "Nicolai Gedda",
      optiond: "Beniamino Gigli",
    },
    {
      // Question 4
      answer: 4,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose:
        "If you didn't recognize Kaufmann, I doubt you can win this quiz!",
      extraInfoWin: "Maria Santa dreams of Kaufmann every night!",
      totalAnswers: 4,
      optiona: "José Cura",
      optionb: "Roberto Alagna",
      optionc: "James King",
      optiond: "Jonas Kaufmann",
    },
    {
      // Question 5
      answer: 1,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: "Una furtiva lagrima! Don't cry if you lose!",
      extraInfoWin: "This aria makes Maria Santa cry",
      totalAnswers: 4,
      optiona: "Rolando Villazón",
      optionb: "Roberto Alagna",
      optionc: "Giacomo Aragall",
      optiond: "José Carreras",
    },
    {
      // Question 6
      answer: 3,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: "Be careful! Maria Santa is turning red!",
      extraInfoWin: "Great! This was for true connoisseurs!",
      totalAnswers: 4,
      optiona: "Enrico Caruso",
      optionb: "Beniamino Gigli",
      optionc: "Jussi Björling",
      optiond: "Tito Schipa",
    },
    {
      // Question 7
      answer: 1,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose:
        " If you miss 3 times Maria Santa will interrupt the game!",
      extraInfoWin: "Très bien mon ami!",
      totalAnswers: 4,
      optiona: "Juan Diego Flórez",
      optionb: "Alfredo Kraus",
      optionc: "Luciano Pavarotti",
      optiond: "Michael Spyres",
    },
    {
      // Question 8
      answer: 2,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose:
        "How did you make this far? Corelli was one of the greatest!",
      extraInfoWin: "Corelli is one of Maria Santa's favorites!",
      totalAnswers: 4,
      optiona: "José Carreras",
      optionb: "Franco Corelli",
      optionc: "Placido Domingo",
      optiond: "Mario Del Monaco",
    },
    {
      // Question 9
      answer: 4,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: "Bravo! Just one more to win!",
      totalAnswers: 4,
      optiona: "José Carreras",
      optionb: "Giuseppe Di Stefano",
      optionc: "Giacomo Aragall",
      optiond: "Mario Lanza",
    },
    {
      // Question 10
      answer: 3,
      text1: "WHO IS THE TENOR?",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Richard Tucker",
      optionb: "Giacomo Lauri-Volpi",
      optionc: "Carlo Bergonzi",
      optiond: "Marcelo Álvarez",
    },
  ];
  return (
    <>
      <QuizCore
        totalQuestions={totalQuestions}
        questions={questions}
        quizLogo={quizLogo}
        imagesQuiz={imagesQuiz}
        itsSongsQuiz={itsSongsQuiz}
        songsQuiz={songsQuiz}
        mariaSanta={mariaSanta}
        finalMessageWin={finalMessageWin}
        finalMessageWinTotal={finalMessageWinTotal}
        finalMessageLoose={finalMessageLoose}
        linkToPage={linkToPage}
        linkToPageIntro={linkToPageIntro}
        videosQuiz={videosQuiz}
        wrongAnswerAllowed={wrongAnswerAllowed}
        linkToMenu={linkToMenu}
        itsEnglishQuiz={itsEnglishQuiz}
      />
    </>
  );
};
export default tenorQuizEn;
