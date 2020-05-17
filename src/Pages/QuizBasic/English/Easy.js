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
const easyEnglish = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 4;
  const linkToPage = "/englishquizeasy";
  const linkToPageIntro = "/englishquizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "PARABÉNS!",
    "Você se saiu muito bem!",
    "Que tal jogar de novo para tentar acertar tudo?",
  ];
  const finalMessageWinTotal = [
    "FANTASTIC!",
    "YOUR ENGLISH IS VERY GOOD!",
    null,
  ];
  const finalMessageLoose = [
    "VOCÊ PERDEU!",
    "NÃO DESANIME!",
    "A Maria Santa vai se acalmar logo!",
    "O importante é aprender e se desenvolver!",
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
      answer: 3,
      text1: "Qual palavra está errada na seguinte frase?",
      text2: "THE BOOK ARE ON THE TABLE.",
      extraInfoLoose: "Já começou muito mal! Essa era fácil!",
      extraInfoWin: "Very good! Let's see if you can get them all right!",
      totalAnswers: 4,
      optiona: "the",
      optionb: "book",
      optionc: "are",
      optiond: "apple",
    },
    {
      // Question 2
      answer: 4,
      text1: "Rafael _____ English very well, but he _____ speak Spanish.",
      text2: null,
      extraInfoLoose: "Pelo visto você DON'T SPEAK ENGLISH WELL!",
      extraInfoWin: "¡Maria Santa habla muy bien español!",
      totalAnswers: 4,
      optiona: "speak / don't",
      optionb: "speaks / don't",
      optionc: "man / woman",
      optiond: "speaks / doesn't",
    },
    {
      // Question 3
      answer: 2,
      text1: "Let's go to the _____! It _____ now.",
      text2: null,
      extraInfoLoose: "Estou achando você não gosta de festas!",
      extraInfoWin: "GO TO THE PARTY todo mundo gosta!",
      totalAnswers: 4,
      optiona: "circus / isn't rain",
      optionb: "party / isn't raining",
      optionc: "cinema / not rain",
      optiond: "car / motorcycle",
    },
    {
      // Question 4
      answer: 1,
      text1: "Your grammar is _____ but you don't speak _____ .",
      text2: null,
      extraInfoLoose: "Your grammar is terrible!",
      extraInfoWin: "If you speak very well, try the difficult level!",
      totalAnswers: 4,
      optiona: "good / well",
      optionb: "good / good",
      optionc: "strawberry / orange",
      optiond: "well / good",
    },
    {
      // Question 5
      answer: 4,
      text1: "I ate _____ apple in the morning, but _____ apple wasn't good.",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "Next time eat a banana!",
      totalAnswers: 4,
      optiona: "basketball / an",
      optionb: "the / a",
      optionc: "a / the",
      optiond: "an / the",
    },
    {
      // Question 6
      answer: 1,
      text1: "This exam is _____ than any I have ever taken!",
      text2: null,
      extraInfoLoose: "Se esse é o MODE DIFFICULT, melhor você desistir!",
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "more difficult",
      optionb: "difficult",
      optionc: "difficulter",
      optiond: "tasty",
    },
    {
      // Question 7
      answer: 2,
      text1: "O que a seguinte expressão quer dizer?",
      text2: "WHAT'S UP?",
      extraInfoLoose: "What's up with you?",
      extraInfoWin: "Muita gente confunde WHAT'S UP com WHATSAPP!",
      totalAnswers: 4,
      optiona: "Vamos nos falar por aplicativo?",
      optionb: "E aí?",
      optionc: "O que está lá em cima?",
      optiond: "Qual é a sua?",
    },
    {
      // Question 8
      answer: 4,
      text1: "Qual palavra a seguir NÃO representa uma profissão?",
      text2: null,
      extraInfoLoose:
        "Pelo visto você nunca vai ter uma profissão que precise de inglês!",
      extraInfoWin: "A Maria Santa adora um DENTIST!",
      totalAnswers: 4,
      optiona: "lawyer",
      optionb: "clown",
      optionc: "bodyguard",
      optiond: "dentistry",
    },
    {
      // Question 9
      answer: 1,
      text1: "Marcos used the _____ to write his letter.",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "Quero ver como você se sai no modo DIFÍCIL!",
      totalAnswers: 4,
      optiona: "sheet",
      optionb: "bananas",
      optionc: "shit",
      optiond: "cat",
    },
    {
      // Question 10
      answer: 2,
      text1: "Qual o significado da expressão?",
      text2: "PIECE OF CAKE!",
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Vai te catar!",
      optionb: "Muito fácil!",
      optionc: "Pedaço de bolo!",
      optiond: "Que coisa chata!",
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
export default easyEnglish;
