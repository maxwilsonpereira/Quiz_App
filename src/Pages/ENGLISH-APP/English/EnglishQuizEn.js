import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/english-quiz.png";
import img1 from "../../../assets/images/englishquiz/img1.jpg";
import img2 from "../../../assets/images/englishquiz/img2.jpg";
import img3 from "../../../assets/images/englishquiz/img3.jpg";
import img4 from "../../../assets/images/englishquiz/img4.jpg";
import img5 from "../../../assets/images/englishquiz/img5.jpg";
import img6 from "../../../assets/images/englishquiz/img6.jpg";
import img7 from "../../../assets/images/englishquiz/img7.jpg";
import img8 from "../../../assets/images/englishquiz/img8.jpg";
import img9 from "../../../assets/images/englishquiz/img9.jpg";
import img10 from "../../../assets/images/englishquiz/img10.jpg";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const hardEnglish = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/englishquiz-en";
  const linkToPageIntro = "/englishquizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "VERY GOOD!",
    "You made it!",
    "How about playing again to try to get all the questions right?",
  ];
  const finalMessageWinTotal = ["FANTASTIC!", "YOUR ENGLISH IS AMAZING!", null];
  const finalMessageLoose = [
    "YOU LOST!",
    "DON'T LOSE YOUR MOTIVATION!",
    "Maria Santa will calm down very soon!",
    "How about playing one more time?",
  ];
  const itsSongsQuiz = false;
  const songsQuiz = null;
  const imagesQuiz = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const questions = [
    {
      // Question 1
      answer: 4,
      text1: "_____ Caviar in the fridge?",
      text2: null,
      extraInfoLoose: "Missing like this, you won't reach till the end!",
      extraInfoWin: "Maria Santa loves Caviar!",
      totalAnswers: 4,
      optiona: "There isn’t no",
      optionb: "There aren’t no",
      optionc: "There is any",
      optiond: "There isn’t any",
    },
    {
      // Question 2
      answer: 2,
      text1: "_____ I got to the airport, the plane _____ left",
      text2: null,
      extraInfoLoose: "I bet you won't make it to the end!",
      extraInfoWin: "Very good! Eight more to go!",
      totalAnswers: 4,
      optiona: "At the time / had",
      optionb: "By the time / had",
      optionc: "By the time / has",
      optiond: "On the time / had",
    },
    {
      // Question 3
      answer: 2,
      text1: "Which is the synonym of PALTRY?",
      text2: null,
      extraInfoLoose: "I'm starting to realizing that your English is paltry!",
      extraInfoWin: "It's going to get harder!",
      totalAnswers: 4,
      optiona: "forecast",
      optionb: "insignificant",
      optionc: "poem",
      optiond: "poverty",
    },
    {
      // Question 4
      answer: 4,
      text1: "I haven't got _____ ",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: "Maria Santa has a big family!",
      totalAnswers: 4,
      optiona: "no brothers or sisters.",
      optionb: "brothers or sisters.",
      optionc: "some brothers and sisters.",
      optiond: "any brothers or sisters.",
    },
    {
      // Question 5
      answer: 3,
      text1: "Maria Santa loves to _____ .",
      text2: null,
      extraInfoLoose: "How could you miss this one?",
      extraInfoWin: "Who doesn't love to chill out sometimes?",
      totalAnswers: 4,
      optiona: "clot",
      optionb: "derail",
      optionc: "chill out",
      optiond: "kneel",
    },
    {
      // Question 6
      answer: 1,
      text1: "What is the meaning of the expression?",
      text2: "NOT TO SHABBY!",
      extraInfoLoose: "Maria Santa is getting pissed!",
      extraInfoWin: "NOT TO SHABBY AT ALL!",
      totalAnswers: 4,
      optiona: "Not bad!",
      optionb: "Don't shake!",
      optionc: "Not so fast!",
      optiond: "Don't do this!",
    },
    {
      // Question 7
      answer: 2,
      text1: "Your boss asks you to take some OVERTIME. What does it mean?",
      text2: null,
      extraInfoLoose: "You should study English overtime!",
      extraInfoWin: "Maria Santa hates to work OVERTIME!",
      totalAnswers: 4,
      optiona: "To stay at home.",
      optionb: "To work extra time.",
      optionc: "To arrive earlier.",
      optiond: "To arrive later.",
    },
    {
      // Question 8
      answer: 4,
      text1: "What is the meaning of the expression?",
      text2: "RIP-OFF",
      extraInfoLoose: "Maria Santa is getting pissed...",
      extraInfoWin: "Two more and you will win!",
      totalAnswers: 4,
      optiona: "dig",
      optionb: "take off",
      optionc: "die in peace",
      optiond: "trick",
    },
    {
      // Question 9
      answer: 2,
      text1: "What is the meaning of the expression?",
      text2: "BREAK A LEG!",
      extraInfoLoose: "How did you get so far and missed this one?",
      extraInfoWin: "You are almost there! One more!",
      totalAnswers: 4,
      optiona: "Go angry!",
      optionb: "Good luck!",
      optionc: "Enjoy your food!",
      optiond: "Be careful!",
    },
    {
      // Question 10
      answer: 1,
      text1: "What is the meaning of the expression?",
      text2: "HAVE A BLAST!",
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Enjoy it much!",
      optionb: "It will explode!",
      optionc: "Shout out loud!",
      optiond: "Enjoy your food!",
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
        wrongAnswerAllowed={wrongAnswerAllowed}
        linkToMenu={linkToMenu}
        itsEnglishQuiz={itsEnglishQuiz}
      />
    </>
  );
};
export default hardEnglish;
