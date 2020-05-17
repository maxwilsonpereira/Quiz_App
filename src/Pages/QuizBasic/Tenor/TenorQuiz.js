import React from "react";

import QuizCore from "../QuizCore";
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
const tenorQuiz = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/tenorquiz";
  const linkToPageIntro = "/tenorquizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "Você deve amar as vozes dos tenores!",
    "Que tal jogar de novo para tentar acertar tudo?",
  ];
  const finalMessageWinTotal = [
    "BRAVÍSSIMO!",
    "VOCÊ CONHECE OS TENORES COMO POUCOS!",
    null,
  ];
  const finalMessageLoose = [
    "VOCÊ PERDEU!",
    "NÃO DESANIME!",
    "A Maria Santa vai se acalmar logo!",
    "Que tal tentar mais uma vez?",
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
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose:
        "Se errou esse que era o mais fácil, duvido muito que chegue até o final!",
      extraInfoWin:
        "Esse era muito fácil! Vamos ver se você saberá os próximos!",
      totalAnswers: 4,
      optiona: "Placido Domingo",
      optionb: "José Carreras",
      optionc: "Luciano Pavarotti",
      optiond: "Andrea Bocelli",
    },
    {
      // Question 2
      answer: 1,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Achou que só existiam os 3 Tenores?",
      extraInfoWin: "A Maria Santa ama um tenor dramático!",
      totalAnswers: 4,
      optiona: "Mario Del Monaco",
      optionb: "Tito Schipa",
      optionc: "Placido Domingo",
      optiond: "Jon Vickers",
    },
    {
      // Question 3
      answer: 3,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Assim você não vai chegar ao final!",
      extraInfoWin:
        '"Je crois entendre encore" sempre faz a Maria Santa chorar!',
      totalAnswers: 4,
      optiona: "Juan Diego Flórez",
      optionb: "Fritz Wunderlich",
      optionc: "Nicolai Gedda",
      optiond: "Beniamino Gigli",
    },
    {
      // Question 4
      answer: 4,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose:
        "Se não reconheceu o Kaufmann, duvido conseguir ganhar esse quiz!",
      extraInfoWin: "A Maria Santa ama o Jonas Kaufmann!",
      totalAnswers: 4,
      optiona: "José Cura",
      optionb: "Roberto Alagna",
      optionc: "James King",
      optiond: "Jonas Kaufmann",
    },
    {
      // Question 5
      answer: 1,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Una furtiva lagrima! Não chore se você perder!",
      extraInfoWin: "Essa ária não é linda?",
      totalAnswers: 4,
      optiona: "Rolando Villazón",
      optionb: "Roberto Alagna",
      optionc: "Giacomo Aragall",
      optiond: "José Carreras",
    },
    {
      // Question 6
      answer: 3,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "A Maria Santa está ficando vermelha!",
      extraInfoWin: "Excelente! Essa é para verdadeiros conhecedores!",
      totalAnswers: 4,
      optiona: "Enrico Caruso",
      optionb: "Beniamino Gigli",
      optionc: "Jussi Björling",
      optiond: "Tito Schipa",
    },
    {
      // Question 7
      answer: 1,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Assim a Maria Santa vai interromper!",
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
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Como chegou até aqui e errou essa?",
      extraInfoWin: "Corelli é um dos preferidos da Maria Santa!",
      totalAnswers: 4,
      optiona: "José Carreras",
      optionb: "Franco Corelli",
      optionc: "Placido Domingo",
      optiond: "Mario Del Monaco",
    },
    {
      // Question 9
      answer: 4,
      text1: "QUEM É O TENOR?",
      text2: null,
      extraInfoLoose: "Presta atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "Bravo! Quero ver acertar a última!",
      totalAnswers: 4,
      optiona: "José Carreras",
      optionb: "Giuseppe Di Stefano",
      optionc: "Giacomo Aragall",
      optiond: "Mario Lanza",
    },
    {
      // Question 10
      answer: 3,
      text1: "QUEM É O TENOR?",
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
export default tenorQuiz;
