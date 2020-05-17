import React from "react";

import QuizCore from "../QuizCore";
import quizLogo from "../../../assets/logos/opera-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const operaQuiz = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/operaquiz";
  const linkToPageIntro = "/operaquizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "Você deve amar óperas!",
    "Que tal jogar de novo para tentar acertar todas?",
  ];
  const finalMessageWinTotal = [
    "BRAVÍSSIMO!",
    "COM CERTEZA VOCÊ É UM AMANTE DE ÓPERAS!",
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
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose:
        "Se errou essa que era fácil, duvido muito que chegue até o final!",
      extraInfoWin: "Essa era fácil! Vamos ver se você saberá as próximas!",
      totalAnswers: 4,
      optiona: "Turandot",
      optionb: "La Traviata",
      optionc: "The Phantom of the Opera",
      optiond: "Tosca",
    },
    {
      // Question 2
      answer: 3,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "Assim você não vai chegar ao final!",
      extraInfoWin: '"Rigoletto" é uma das favoritas da Maria Santa!',
      totalAnswers: 4,
      optiona: "Il Barbiere di Siviglia",
      optionb: "La Cenerentola",
      optionc: "Rigoletto",
      optiond: "Orfeo ed Euridice",
    },
    {
      // Question 3
      answer: 1,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "Aposto que essa melodia você conhecia!",
      extraInfoWin: '"O mio babbino caro" é um clássico!',
      totalAnswers: 4,
      optiona: "Gianni Schicchi",
      optionb: "Idomeneo",
      optionc: "Die Zauberflöte",
      optiond: "Norma",
    },
    {
      // Question 4
      answer: 2,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "Assim você não vai vencer!",
      extraInfoWin: "Que dueto maravilhoso!",
      totalAnswers: 4,
      optiona: "Carmen",
      optionb: "Les Pêcheurs de Perles",
      optionc: "La Cage aux Folles",
      optiond: "Samson et Dalila",
    },
    {
      // Question 5
      answer: 2,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: 'Quem nunca ouviu o belíssimo "Dueto das Flores"?',
      totalAnswers: 4,
      optiona: "Manon Lescaut",
      optionb: "Lakmé",
      optionc: "Madama Butterfly",
      optiond: "Les Contes d'Hoffmann",
    },
    {
      // Question 6
      answer: 4,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "A Maria Santa está ficando vermelha!",
      extraInfoWin: "Um dos mais belos Intermezzos já escritos!",
      totalAnswers: 4,
      optiona: "Pagliacci",
      optionb: "Otello",
      optionc: "La Traviata",
      optiond: "Cavalleria Rusticana",
    },
    {
      // Question 7
      answer: 3,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "Assim a Maria Santa vai interromper!",
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
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose: "Chutou errado!",
      extraInfoWin: "Só mais duas para vencer!",
      totalAnswers: 4,
      optiona: "La Cenerentola",
      optionb: "Il Turco in Italia",
      optionc: "Il Barbiere di Siviglia",
      optiond: "Les Contes d'Hoffmann",
    },
    {
      // Question 9
      answer: 2,
      text1: "QUAL É A ÓPERA?",
      text2: null,
      extraInfoLoose:
        "Vamos prestar atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "A única ópera composta por Beethoven!",
      totalAnswers: 4,
      optiona: "Lohengrin",
      optionb: "Fidelio",
      optionc: "Lucia di Lammermoor",
      optiond: "Meistersinger von Nürnberg",
    },
    {
      // Question 10
      answer: 4,
      text1: "QUAL É A ÓPERA?",
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
export default operaQuiz;
