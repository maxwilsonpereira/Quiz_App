import React from "react";

import QuizCore from "../QuizCore";
import quizLogo from "../../../assets/logos/movie-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";

// ON PAGE REFRESH GO TO BEGINNING!!
const movieQuiz = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/moviequiz";
  const linkToPageIntro = "/moviequizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "MUITO BOM!",
    "Você deve amar filmes, como a Maria Santa!",
    "Que tal jogar de novo para tentar acertar todos?",
  ];
  const finalMessageWinTotal = [
    "FANTÁSTICO!",
    "NÃO ERROU NENHUM!",
    "Você é como a Maria Santa, tem uma grande paixão pelo cinema!",
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
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Pelo visto você não tem chance de vencer esse quiz!",
      extraInfoWin:
        "Pulp Fiction é um clássico! Vamos ver se você saberá os próximos!",
      totalAnswers: 4,
      optiona: "Pulp Fiction",
      optionb: "O Poderoso Chefão",
      optionc: "Cidadão Kane",
      optiond: "O Sol é Para Todos",
    },
    {
      // Question 2
      answer: 2,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Assim você não vai chegar ao final!",
      extraInfoWin: "Maria Santa sempre se emociona com esse filme!",
      totalAnswers: 4,
      optiona: "A Lista de Schindler",
      optionb: "A Espera de Um Milagre",
      optionc: "Os Bons Companheiros",
      optiond: "Um Estranho no Ninho",
    },
    {
      // Question 3
      answer: 3,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Se errar 3 vezes a Maria Santa vai interromper!",
      extraInfoWin: "Um dos filmes preferidos da Maria Santa!",
      totalAnswers: 4,
      optiona: "Uma Linda Mulher",
      optionb: "A Princesa Prometida",
      optionc: "Notting Hill",
      optiond: "Erin Brockovich",
    },
    {
      // Question 4
      answer: 1,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Imperdoável esse erro!",
      extraInfoWin:
        "É bom continuar acertanto ou a Maria Santa será imperdoável!",
      totalAnswers: 4,
      optiona: "Os Imperdoáveis",
      optionb: "A Princesa Prometida",
      optionc: "Vampiros da Noite",
      optiond: "Garotos Perdidos",
    },
    {
      // Question 5
      answer: 4,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "A Maria Santa está ficando vermelha que nem o Deadpool!",
      extraInfoWin: "Deadpool is so cool!",
      totalAnswers: 4,
      optiona: "O Homen Fantástico",
      optionb: "Os Vingadores",
      optionc: "Doutor Estranho",
      optiond: "Deadpool",
    },
    {
      // Question 6
      answer: 4,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Assim não é possível!",
      extraInfoWin: "Muito bem! Só faltam 4!",
      totalAnswers: 4,
      optiona: "Brokeback Mountain",
      optionb: "Janela Indiscreta",
      optionc: "Quanto Mais Quente Melhor",
      optiond: "Beleza Americana",
    },
    {
      // Question 7
      answer: 2,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Assim a Maria Santa vai interromper!",
      extraInfoWin: "Um filme emocionante!",
      totalAnswers: 4,
      optiona: "Doutor Jivago ",
      optionb: "A Lista de Schindler",
      optionc: "Coração Selvagem",
      optiond: "A Desaparecida",
    },
    {
      // Question 8
      answer: 3,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Como chegou até aqui? Esse filme é um clássico!",
      extraInfoWin: "Maria Santa tem pavor do Hannibal Lecter!",
      totalAnswers: 4,
      optiona: "O Franco-Atirador",
      optionb: "Cães de Aluguel ",
      optionc: "O Silêncio dos Inocentes",
      optiond: "Duro de Matar",
    },
    {
      // Question 9
      answer: 1,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: "Pelo visto você deu sorte em ter chegado até aqui!",
      extraInfoWin: "Você parece ser bem eclético, como a Maria Santa!",
      totalAnswers: 4,
      optiona: "Vingadores: Ultimato",
      optionb: "Vingadores: Era de Ultron",
      optionc: "Guardiões da Galáxia",
      optiond: "Os Super-Heróis",
    },
    {
      // Question 10
      answer: 4,
      text1: "QUAL É O FILME?",
      text2: null,
      extraInfoLoose: null,
      extraInfoWin: null,
      totalAnswers: 4,
      optiona: "Os Homens que não Amavam as Mulheres",
      optionb: "Um Corpo que Cai",
      optionc: "Touro Indomável",
      optiond: "Onde os Fracos Não Têm Vez",
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
export default movieQuiz;
