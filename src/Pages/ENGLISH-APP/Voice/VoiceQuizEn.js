import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/voice-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";
//IMPORTING THE IMAGES:
import img1 from "../../../assets/images/voicequiz/img1-english.png";
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
import song1 from "../../../assets/audios/voicequizenglish/song1.mp3";
import song2 from "../../../assets/audios/voicequizenglish/song2.mp3";
import song3 from "../../../assets/audios/voicequizenglish/song3.mp3";
import song4 from "../../../assets/audios/voicequizenglish/song4.mp3";
import song5 from "../../../assets/audios/voicequizenglish/song5.mp3";
import song6 from "../../../assets/audios/voicequizenglish/song6.mp3";
import song7 from "../../../assets/audios/voicequizenglish/song7.mp3";
import song8 from "../../../assets/audios/voicequizenglish/song8.mp3";
import song9 from "../../../assets/audios/voicequizenglish/song9.mp3";
import song10 from "../../../assets/audios/voicequizenglish/song10.mp3";

// ON PAGE REFRESH GO TO BEGINNING!!
const voiceQuizEn = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/voicequiz-en";
  const linkToPageIntro = "/voicequizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "VERY GOOD!",
    "You have a really good ear!",
    "How about playing again to try to get everything right?",
  ];
  const finalMessageWinTotal = [
    "EXCELLENT!",
    "YOU HAVE A WONDERFUL EAR!",
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
      answer: 2,
      text1: "WHOSE VOICE IS THIS?",
      text2: "* Don't be fooled by the photos!",
      extraInfoLoose:
        "If you missed this easy one, I doubt you will make it to the end!",
      extraInfoWin: "This was easy! Let's see if you will know the next!",

      totalAnswers: 4,
      optiona: "Bill Clinton",
      optionb: "Donald Trump",
      optionc: "George W. Bush",
      optiond: "Ronald Reagan",
    },
    {
      // Question 2
      answer: 3,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Missing like this, you won't reach till the end!",
      extraInfoWin: "Maria Santa loves all Tom Hanks films",
      totalAnswers: 4,
      optiona: "Will Smith",
      optionb: "Johnny Depp",
      optionc: "Tom Hanks",
      optiond: "Mel Gibson",
    },
    {
      // Question 3
      answer: 4,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose:
        " If you miss 3 times Maria Santa will interrupt the game!",
      extraInfoWin: "You are good! Keep going!",
      totalAnswers: 4,
      optiona: "Britney Spears",
      optionb: "Taylor Swift",
      optionc: "Beyoncé ",
      optiond: "Madonna ",
    },
    {
      // Question 4
      answer: 1,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: "It seems to me that you like politics!",
      totalAnswers: 4,
      optiona: "Barack Obama",
      optionb: "Mark Zuckerberg",
      optionc: "Joaquin Phoenix",
      optiond: "Bernie Sanders",
    },
    {
      // Question 5
      answer: 3,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Be careful! Maria Santa is turning red!",
      extraInfoWin: "Not too shabby!",
      totalAnswers: 4,
      optiona: "Elen DeGeneres",
      optionb: "Wendy Williams",
      optionc: "Oprah Winfrey",
      optiond: "Katie Couric",
    },
    {
      // Question 6
      answer: 1,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "You better pay attention! You are annoying Maria Santa!",
      extraInfoWin: "Maria Santa loves his films, especially Titanic.",
      totalAnswers: 4,
      optiona: "Leonardo DiCaprio",
      optionb: "Tom Cruise",
      optionc: "Brad Pitt",
      optiond: "Adam Driver",
    },
    {
      // Question 7
      answer: 2,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Bad guess!",
      extraInfoWin: "The Oscar speech!",
      totalAnswers: 4,
      optiona: "Renee Zellweger",
      optionb: "Julia Roberts",
      optionc: "Julianne Moore",
      optiond: "Meryl Streep",
    },
    {
      // Question 8
      answer: 1,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Maybe you are not a sport person!",
      extraInfoWin: "Very good! Just two more to win!",
      totalAnswers: 4,
      optiona: "Michael Jordan",
      optionb: "Hulk Hogan",
      optionc: "Magic Johnson",
      optiond: "Mike Tyson",
    },
    {
      // Question 9
      answer: 4,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: "Great! Just one more!",
      totalAnswers: 4,
      optiona: "Joe Biden",
      optionb: "Elon Musk",
      optionc: "Bruce Springsteen",
      optiond: "Jimi Hendrix",
    },
    {
      // Question 10
      answer: 3,
      text1: "WHOSE VOICE IS THIS?",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Jennifer Lawrence",
      optionb: "Charlize Theron",
      optionc: "Scarlett Johansson",
      optiond: "Emma Stone",
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
export default voiceQuizEn;
