import React from "react";

import QuizCore from "../../QuizBasic/QuizCore";
import quizLogo from "../../../assets/logos/movie-quiz-en.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const movieQuizEn = (props) => {
  const itsEnglishQuiz = true;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/moviequiz-en";
  const linkToPageIntro = "/moviequizintro-en";
  const linkToMenu = "/introenglish";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "VERY GOOD!",
    "You must love movies, like Maria Santa!",
    "How about playing again to try to get all the questions right?",
  ];
  const finalMessageWinTotal = [
    "FANTASTIC!",
    "NO MISTAKES!",
    "You have a great passion for cinema, like Maria Santa!",
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
    "WCEOHmyEZI8",
    "AjkGtvQQX4o",
    "XSj0AmrXvyM",
    "Iujc7uvqk0o",
    "aFv9rqXz7TU",
    "p9TgY0vvHzU",
    "Fx-LT68Iz3Q",
    "vbMUt4sd1hA",
    "WVFx42QHa_A",
    "mEsN92r_1KE",
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
      answer: 1,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "Apparently you have no chance of winning this quiz!",
      extraInfoWin:
        "Pulp Fiction is a classic! Let's see if you will know the next!",
      totalAnswers: 4,
      optiona: "Pulp Fiction",
      optionb: "The Godfather",
      optionc: "Citizen Kane",
      optiond: "The Last Stand",
    },
    {
      // Question 2
      answer: 2,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "If you keep making mistakes you won't reach to the end!",
      extraInfoWin: "Maria Santa always gets emotional with this film!",
      totalAnswers: 4,
      optiona: "Schindler’s List",
      optionb: "The Green Mile",
      optionc: "Argo",
      optiond: "A Ghost Story",
    },
    {
      // Question 3
      answer: 3,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "If you miss 3 times Maria Santa will interrupt!",
      extraInfoWin: "One of Maria Santa's favorite films!",
      totalAnswers: 4,
      optiona: "Pretty Woman",
      optionb: "Green Book",
      optionc: "Notting Hill",
      optiond: "Erin Brockovich",
    },
    {
      // Question 4
      answer: 1,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "Unforgivable this mistake!",
      extraInfoWin: "Keep going or Maria Santa will be unforgivable!",
      totalAnswers: 4,
      optiona: "Unforgiven",
      optionb: "Dallas Buyers Club",
      optionc: "The Shape of Water",
      optiond: "Dances With Wolves",
    },
    {
      // Question 5
      answer: 4,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "Maria Santa is turning red like Deadpool!",
      extraInfoWin: "Deadpool is so cool!",
      totalAnswers: 4,
      optiona: "Fantastic Four",
      optionb: "The Avengers",
      optionc: "Doctor Strange",
      optiond: "Deadpool",
    },
    {
      // Question 6
      answer: 4,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "You can't go on like this!",
      extraInfoWin: "Very well! Only 4 left!",
      totalAnswers: 4,
      optiona: "Brokeback Mountain",
      optionb: "Million Dollar Baby",
      optionc: "Shakespeare in Love",
      optiond: "American Beauty",
    },
    {
      // Question 7
      answer: 2,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "If you miss 3 times Maria Santa will interrupt!",
      extraInfoWin: "Very touching movie!",
      totalAnswers: 4,
      optiona: "The Artist",
      optionb: "Schindler’s List",
      optionc: "A Beautiful Mind",
      optiond: "Blue Jasmine",
    },
    {
      // Question 8
      answer: 3,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "How did you make until here? This film is a classic!",
      extraInfoWin: "Maria Santa is terrified of Hannibal Lecter!",
      totalAnswers: 4,
      optiona: "Platoon",
      optionb: "Side Effects ",
      optionc: "The Silence of the Lambs",
      optiond: "Birdman",
    },
    {
      // Question 9
      answer: 1,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: "Apparently you were lucky to get here!",
      extraInfoWin: "You seem to be very eclectic, like Maria Santa!",
      totalAnswers: 4,
      optiona: "Avengers: Endgame",
      optionb: "Avengers: Age of Ultron",
      optionc: "Guardians of the Galaxy",
      optiond: "The Superheroes",
    },
    {
      // Question 10
      answer: 4,
      text1: "GUESS THE MOVIE!",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "The Nice Guys",
      optionb: "Hell or High Water",
      optionc: "True Grit",
      optiond: "No Country for Old Men",
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
export default movieQuizEn;
