import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/musical-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const musicalQuizEn = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/musicalquiz-en";
  const linkToPageIntro = "/musicalquizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "You must love musicals!",
    "How about playing again to try to get all the questions right?",
  ];
  const finalMessageWinTotal = [
    "BRAVISSIMO!",
    "YOU KNOW ALL THE MUSICALS!",
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
    "A4k9aow3FKw",
    "fKm7RQQ5Uv4",
    "iQkVIBNYB7o",
    "7-TWljHBQ8E",
    "gr3GWQCe9HI",
    "UC8G7Ac7Uyw",
    "pxpQYHV0mdc",
    "HgQ5y9T5P5A",
    "c1zXKdR4M7w",
    "2brRzOgnTNE",
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
      answer: 2,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose:
        "If you missed this easy one, I doubt you will make it to the end!",
      extraInfoWin: "This was easy! Let's see if you will know the next!",

      totalAnswers: 4,
      optiona: "The Sound of Music",
      optionb: "The Phantom of the Opera",
      optionc: "Hairspray",
      optiond: "Tom & Jerry",
    },
    {
      // Question 2
      answer: 4,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "Missing like this, you won't reach till the end!",
      extraInfoWin: 'Maria Santa loves "My Favorite Things"!',
      totalAnswers: 4,
      optiona: "Jekyll & Hyde",
      optionb: "Book of Mormon",
      optionc: "Turandot",
      optiond: "The Sound of Music",
    },
    {
      // Question 3
      answer: 2,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "You need to watch more musicals!",
      extraInfoWin: "Les Misérables is a hit!",
      totalAnswers: 4,
      optiona: "Dreamgirls",
      optionb: "Les Misérables",
      optionc: "Sweeney Todd",
      optiond: "Ring of Keys",
    },
    {
      // Question 4
      answer: 4,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "If you miss 3 times Maria Santa will interrupt!",
      extraInfoWin: "Very good! This was not that easy!",
      totalAnswers: 4,
      optiona: "Hairspray",
      optionb: "The Strangers",
      optionc: "La Cage aux Folles",
      optiond: "Wicked",
    },
    {
      // Question 5
      answer: 3,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "Let's pay attention! You are annoying Maria Santa!",
      extraInfoWin: "Great job! This was not easy at all!",
      totalAnswers: 4,
      optiona: "Mean Girls",
      optionb: "The Lion King",
      optionc: "Fun Home",
      optiond: "The Little Mermaid",
    },
    {
      // Question 6
      answer: 4,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "Be careful! Maria Santa is turning red!",
      extraInfoWin: "Maria Santa loves this Musical!",
      totalAnswers: 4,
      optiona: "Wicked",
      optionb: "Sweeney Todd",
      optionc: "La Traviata",
      optiond: "Book of Mormon",
    },
    {
      // Question 7
      answer: 3,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "Bad guess!",
      extraInfoWin: "Very well! Only 3 left!",
      totalAnswers: 4,
      optiona: "Mary Poppins",
      optionb: "Wicked",
      optionc: "Hairspray",
      optiond: "Hamilton",
    },
    {
      // Question 8
      answer: 1,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "How did you make until here? This song is a hit!",
      extraInfoWin: "I Am What I Am! A hit!",
      totalAnswers: 4,
      optiona: "La Cage aux Folles",
      optionb: "Dreamgirls",
      optionc: "Chicago",
      optiond: "Aladdin",
    },
    {
      // Question 9
      answer: 2,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: "Apparently you were lucky to get here!",
      extraInfoWin: "This Is The Moment! One more and you win!",
      totalAnswers: 4,
      optiona: "Wicked",
      optionb: "Jekyll & Hyde",
      optionc: "The Producers",
      optiond: "Chicago",
    },
    {
      // Question 10
      answer: 2,
      text1: "GUESS THE MUSICAL!",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "The Producers",
      optionb: "Yentl",
      optionc: "Miss Saigon",
      optiond: "Ballroom",
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
export default musicalQuizEn;
