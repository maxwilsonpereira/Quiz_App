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
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/englishquizhard";
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
    "Você perdeu!",
    "Não desanime!",
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
      answer: 4,
      text1: "Qual o significado da expressão?",
      text2: '"IN A NUTSHELL!"',
      extraInfoLoose: "Já começou a irritar a Maria Santa!",
      extraInfoWin: "Let's see if you can get them all right!",
      totalAnswers: 4,
      optiona: "Não enche o saco!",
      optionb: "Dentro da casca de noz!",
      optionc: "Você é burro!",
      optiond: "Em poucas palavras!",
    },
    {
      // Question 2
      answer: 2,
      text1:
        "Silvia _____ about buying new clothes. She didn't have the money, _____ .",
      text2: null,
      extraInfoLoose: "I bet you won't make it to the end!",
      extraInfoWin: "Maria Santa loves to buy new clothes.",
      totalAnswers: 4,
      optiona: "through / although",
      optionb: "thought / though",
      optionc: "fought / though",
      optiond: "thought / although",
    },
    {
      // Question 3
      answer: 2,
      text1: "Which is the synonym of PALTRY?",
      text2: null,
      extraInfoLoose: "Estou achando que o seu inglês é PALTRY!",
      extraInfoWin: "Impressive! More 7 to go!",
      totalAnswers: 4,
      optiona: "forecast",
      optionb: "insignificant",
      optionc: "poem",
      optiond: "poverty",
    },
    {
      // Question 4
      answer: 4,
      text1: "Qual o significado da expressão?",
      text2: "LET'S HANG OUT!",
      extraInfoLoose: "To hang out is not your thing!",
      extraInfoWin: "Maria Santa loves to HANG OUT!",
      totalAnswers: 4,
      optiona: "Assim não dá!",
      optionb: "Vamos começar!",
      optionc: "Vamos pendurar lá fora!",
      optiond: "Vamos sair para curtir!",
    },
    {
      // Question 5
      answer: 3,
      text1: "Maria Santa loves to _____ .",
      text2: null,
      extraInfoLoose:
        "You better pay attention! You're irritating Maria Santa!",
      extraInfoWin: "I bet you didn't know the meaning of all the options!",
      totalAnswers: 4,
      optiona: "clot",
      optionb: "derail",
      optionc: "chill out",
      optiond: "kneel",
    },
    {
      // Question 6
      answer: 1,
      text1: "Qual o significado da expressão?",
      text2: "NOT TO SHABBY!",
      extraInfoLoose: "Be careful! Maria Santa is getting pissed!",
      extraInfoWin: "NOT TO SHABBY AT ALL!",
      totalAnswers: 4,
      optiona: "Nada mal!",
      optionb: "Não é pobre!",
      optionc: "Não tão rápido!",
      optiond: "Para com isso!",
    },
    {
      // Question 7
      answer: 2,
      text1: "Your boss asks you to take some OVERTIME. What does it mean?",
      text2: null,
      extraInfoLoose: "You should study overtime!",
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
      text1: "O que RIP-OFF significa?",
      text2: null,
      extraInfoLoose: "Maria Santa is getting pissed...",
      extraInfoWin: "Two more and you will win!",
      totalAnswers: 4,
      optiona: "morrer dormindo",
      optionb: "decolar",
      optionc: "morrer em paz",
      optiond: "enganar",
    },
    {
      // Question 9
      answer: 2,
      text1: "The dog _____ full of _____ yesterday.",
      text2: null,
      extraInfoLoose: "How did you get here and miss this one?",
      extraInfoWin: "You are almost there! One more!",
      totalAnswers: 4,
      optiona: "arrives / fleas",
      optionb: "arrived / fleas",
      optionc: "come / food",
      optiond: "is / mosquitoes",
    },
    {
      // Question 10
      answer: 1,
      text1: "Qual o significado da expressão?",
      text2: "HAVE A BLAST!",
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Divirtam-se muito!",
      optionb: "Vai explodir!",
      optionc: "Vamos beijar!",
      optiond: "Tenha um bom dia!",
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
