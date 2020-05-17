import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/opera-quiz-en.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const operaQuizEn = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/operaquiz-en";
  const linkToPageIntro = "/operaquizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "You must love operas!",
    "How about playing again to try to get all the questions right?",
  ];
  const finalMessageWinTotal = [
    "BRAVISSIMO!",
    "FOR SURE YOU ARE AN OPERA LOVER!",
    null,
  ];
  const finalMessageLoose = [
    "YOU LOST!",
    "DON'T LOSE YOUR MOTIVATION!",
    "Maria Santa will calm down very soon!",
    "How about playing one more time?",
  ];
  const itsSongsQuiz = false;
  const songsQuiz = null;
  const imagesQuiz = null;
  // JUST VIDEO ID on videosQuiz
  const videosQuiz = [
    "NbIBlInEw4I",
    "5XFkxsW_AjA",
    "ylXel447lg0",
    "5n66ezUqaL8",
    "u4spIX34PIM",
    "_jp-o97Dt4k",
    "nssXWP5SmPo",
    "HeVIfLSdj_4",
    "b7dhbgGk8ec",
    "t-3PP8OMSVw",
  ];
  // const songsQuiz = [
  //   song1,
  //   song2,
  //   song3,
  //   song4,
  //   song5,
  //   song6,
  //   song7,
  //   song8,
  //   song9,
  //   song10,
  // ];
  // const imagesQuiz = [
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  //   img10,
  // ];
  const questions = [
    {
      // Question 1
      answer: 4,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose:
        "If you missed this easy one, I doubt you will make it to the end!",
      extraInfoWin: "This was easy! Let's see if you will know the next!",
      totalAnswers: 4,
      optiona: "Turandot",
      optionb: "La Traviata",
      optionc: "The Phantom of the Opera",
      optiond: "Tosca",
    },
    {
      // Question 2
      answer: 3,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "Missing like this, you won't reach till the end!",
      extraInfoWin: 'Maria Santa loves "Rigoletto"!',
      totalAnswers: 4,
      optiona: "Il Barbiere di Siviglia",
      optionb: "La Cenerentola",
      optionc: "Rigoletto",
      optiond: "Orfeo ed Euridice",
    },
    {
      // Question 3
      answer: 1,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "I hope at least this melody you knew!",
      extraInfoWin: '"O mio babbino caro" is a hit!',
      totalAnswers: 4,
      optiona: "Gianni Schicchi",
      optionb: "Idomeneo",
      optionc: "Die Zauberflöte",
      optiond: "Norma",
    },
    {
      // Question 4
      answer: 2,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "If you miss 3 times Maria Santa will interrupt!",
      extraInfoWin: "What a wonderful duet!",
      totalAnswers: 4,
      optiona: "Carmen",
      optionb: "Les Pêcheurs de Perles",
      optionc: "La Cage aux Folles",
      optiond: "Samson et Dalila",
    },
    {
      // Question 5
      answer: 2,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: 'Who never listened to the beautiful "Flower Duet"?',
      totalAnswers: 4,
      optiona: "Manon Lescaut",
      optionb: "Lakmé",
      optionc: "Madama Butterfly",
      optiond: "Les Contes d'Hoffmann",
    },
    {
      // Question 6
      answer: 4,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "Be careful! Maria Santa is turning red!",
      extraInfoWin: "One of the most beautiful Intermezzos ever written!",
      totalAnswers: 4,
      optiona: "Pagliacci",
      optionb: "Otello",
      optionc: "La Traviata",
      optiond: "Cavalleria Rusticana",
    },
    {
      // Question 7
      answer: 3,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "How did you make until here? This is a classic!",
      extraInfoWin: "Mon coeur s'ouvre à ta voix!",
      totalAnswers: 4,
      optiona: "Manon Lescaut",
      optionb: "La Bohème",
      optionc: "Samson and Delilah",
      optiond: "Carmen",
    },
    {
      // Question 8
      answer: 1,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "Bad guess!",
      extraInfoWin: "Just two more to win!",
      totalAnswers: 4,
      optiona: "La Cenerentola",
      optionb: "Il Turco in Italia",
      optionc: "Il Barbiere di Siviglia",
      optiond: "Les Contes d'Hoffmann",
    },
    {
      // Question 9
      answer: 2,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: "You better pay attention! You are annoying Maria Santa!",
      extraInfoWin: "The only opera composed by Beethoven!",
      totalAnswers: 4,
      optiona: "Lohengrin",
      optionb: "Fidelio",
      optionc: "Lucia di Lammermoor",
      optiond: "Meistersinger von Nürnberg",
    },
    {
      // Question 10
      answer: 4,
      text1: "GUESS THE OPERA!",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Turandot",
      optionb: "Die Zauberflöte",
      optionc: "Tristan und Isolde",
      optiond: "Die Frau ohne Schatten",
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
export default operaQuizEn;
