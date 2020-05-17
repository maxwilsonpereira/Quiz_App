import React from "react";

import QuizCore from "../QuizCore";
import quizLogo from "../../../assets/logos/musical-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const musicalQuiz = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/musicalquiz";
  const linkToPageIntro = "/musicalquizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "Você realmente ama musicais!",
    "Que tal jogar de novo para tentar acertar tudo?",
  ];
  const finalMessageWinTotal = [
    "BRAVÍSSIMO!",
    "VOCÊ SABE TUDO SOBRE MUSICAIS!",
    null,
  ];
  const finalMessageLoose = [
    "VOCÊ PERDEU!",
    "NÃO DESANIME!",
    "A Maria Santa vai se acalmar logo!",
    "Que tal tentar mais uma vez?",
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
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose:
        "Se errou essa que era a mais fácil, duvido muito que chegue até o final!",
      extraInfoWin:
        "Esse era muito fácil! Vamos ver se você saberá os próximos!",
      totalAnswers: 4,
      optiona: "The Sound of Music",
      optionb: "The Phantom of the Opera",
      optionc: "Hairspray",
      optiond: "Tom & Jerry",
    },
    {
      // Question 2
      answer: 4,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose: "Assim você não vai chegar ao final!",
      extraInfoWin: 'Maria Santa ama "My Favorite Things"!',
      totalAnswers: 4,
      optiona: "Jekyll & Hyde",
      optionb: "Book of Mormon",
      optionc: "Turandot",
      optiond: "The Sound of Music",
    },
    {
      // Question 3
      answer: 2,
      text1: "Qual é o musical?",
      text2: null,
      extraInfoLoose: "Você precisa assistir mais musicais!",
      extraInfoWin: "Les Misérables é um clássico!",
      totalAnswers: 4,
      optiona: "Dreamgirls",
      optionb: "Les Misérables",
      optionc: "Sweeney Todd",
      optiond: "Ring of Keys",
    },
    {
      // Question 4
      answer: 4,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose: "Você não tem chance!",
      extraInfoWin: "Defying Gravity!",
      totalAnswers: 4,
      optiona: "Hairspray",
      optionb: "The Strangers",
      optionc: "La Cage aux Folles",
      optiond: "Wicked",
    },
    {
      // Question 5
      answer: 3,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "Ring of Keys!",
      totalAnswers: 4,
      optiona: "Little Shop of Horrors",
      optionb: "The Phantom of the Opera",
      optionc: "Fun Home",
      optiond: "Chicago",
    },
    {
      // Question 6
      answer: 4,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose: "A Maria Santa está ficando vermelha!",
      extraInfoWin: "I Believe!",
      totalAnswers: 4,
      optiona: "Wicked",
      optionb: "Sweeney Todd",
      optionc: "La Traviata",
      optiond: "Book of Mormon",
    },
    {
      // Question 7
      answer: 3,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose: "Assim a Maria Santa vai interromper!",
      extraInfoWin: "Good Morning, Baltimore!",
      totalAnswers: 4,
      optiona: "Mary Poppins",
      optionb: "Wicked",
      optionc: "Hairspray",
      optiond: "Hamilton",
    },
    {
      // Question 8
      answer: 1,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose: "Como chegou até aqui e errou essa?",
      extraInfoWin: "I Am What I Am! Um clássico!",
      totalAnswers: 4,
      optiona: "La Cage aux Folles",
      optionb: "Dreamgirls",
      optionc: "Chicago",
      optiond: "Aladdin",
    },
    {
      // Question 9
      answer: 2,
      text1: "QUAL É O MUSICAL?",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "This Is The Moment! Só mais uma e você vence!",
      totalAnswers: 4,
      optiona: "Wicked",
      optionb: "Jekyll & Hyde",
      optionc: "The Producers",
      optiond: "Chicago",
    },
    {
      // Question 10
      answer: 2,
      text1: "QUAL É O MUSICAL?",
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
export default musicalQuiz;
