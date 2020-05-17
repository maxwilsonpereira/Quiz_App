import React from "react";

import QuizCore from "../QuizCore";
import quizLogo from "../../../assets/logos/vozes-quiz.png";
import mariaSanta1 from "../../../assets/images/maria/quiz/quiz1.png";
import mariaSanta2 from "../../../assets/images/maria/quiz/quiz2.png";
import mariaSanta3 from "../../../assets/images/maria/quiz/quiz3.png";
import mariaSanta4 from "../../../assets/images/maria/quiz/quiz4.png";
//IMPORTING THE IMAGES:
import img1 from "../../../assets/images/voicequiz/img1.png";
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
import song1 from "../../../assets/audios/voicequiz/song1.mp3";
import song2 from "../../../assets/audios/voicequiz/song2.mp3";
import song3 from "../../../assets/audios/voicequiz/song3.mp3";
import song4 from "../../../assets/audios/voicequiz/song4.mp3";
import song5 from "../../../assets/audios/voicequiz/song5.mp3";
import song6 from "../../../assets/audios/voicequiz/song6.mp3";
import song7 from "../../../assets/audios/voicequiz/song7.mp3";
import song8 from "../../../assets/audios/voicequiz/song8.mp3";
import song9 from "../../../assets/audios/voicequiz/song9.mp3";
import song10 from "../../../assets/audios/voicequiz/song10.mp3";

// ON PAGE REFRESH GO TO BEGINNING!!
const voiceQuiz = (props) => {
  const itsEnglishQuiz = false;
  const totalQuestions = 10;
  const wrongAnswerAllowed = 3;
  const linkToPage = "/voicequiz";
  const linkToPageIntro = "/voicequizintro";
  const linkToMenu = "/introportugues";
  const mariaSanta = [mariaSanta1, mariaSanta2, mariaSanta3, mariaSanta4];
  const finalMessageWin = [
    "BRAVO!",
    "Você tem um ouvido muito bom!",
    "Que tal jogar de novo para tentar acertar tudo?",
  ];
  const finalMessageWinTotal = [
    "EXCELLENTE!",
    "VOCÊ TEM UM OUVIDO MARAVILHOSO!",
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
      answer: 2,
      text1: "DE QUEM É A VOZ?",
      text2: "* Não se deixe enganar pelas fotos!",
      extraInfoLoose:
        "Se errou essa que era a mais fácil, duvido muito que chegue até o final!",
      extraInfoWin:
        "Essa era muito fácil! Vamos ver se você acertará os próximos!",
      totalAnswers: 4,
      optiona: "Celso Portioli",
      optionb: "Silvio Santos",
      optionc: "Fausto Silva",
      optiond: "Luciano Huck",
    },
    {
      // Question 2
      answer: 3,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Você não assiste jornais?",
      extraInfoWin: "Se prepara porque vai ficar mais dificil!",
      totalAnswers: 4,
      optiona: "João Doria",
      optionb: "Lula",
      optionc: "Bolsonaro",
      optiond: "José Serra",
    },
    {
      // Question 3
      answer: 4,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Não reconheceu a voz do Rei da Voz?",
      extraInfoWin: "São tantas as emoções, bicho!",
      totalAnswers: 4,
      optiona: "Antônio Fagundes",
      optionb: "Lima Duarte",
      optionc: "Agnaldo Rayol",
      optiond: "Roberto Carlos",
    },
    {
      // Question 4
      answer: 1,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Pelo visto você não é de assistir novelas!",
      extraInfoWin: "A Maria Santa assistiu todas as novelas da Regina Duarte!",
      totalAnswers: 4,
      optiona: "Regina Duarte",
      optionb: "Glória Pires",
      optionc: "Susana Vieira",
      optiond: "Cleyde Yáconis",
    },
    {
      // Question 5
      answer: 3,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Não conhece a voz do nosso saudoso campeão?",
      extraInfoWin: "Nosso saudoso campeão!",
      totalAnswers: 4,
      optiona: "Nelson Piquet",
      optionb: "Rubens Barrichello",
      optionc: "Ayrton Senna",
      optiond: "Oscar",
    },
    {
      // Question 6
      answer: 1,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Tenho certeza que você já viu filmes com ele!",
      extraInfoWin: "Maria Santa ama os filmes dele, principalmente Titanic.",
      totalAnswers: 4,
      optiona: "Leonardo DiCaprio",
      optionb: "Tom Cruise",
      optionc: "Brad Pitt",
      optiond: "Adam Driver",
    },
    {
      // Question 7
      answer: 2,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Assim a Maria Santa vai interromper!",
      extraInfoWin: "O tão sonhado discurso do Oscar!",
      totalAnswers: 4,
      optiona: "Renee Zellweger",
      optionb: "Julia Roberts",
      optionc: "Julianne Moore",
      optiond: "Meryl Streep",
    },
    {
      // Question 8
      answer: 1,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose:
        "Deve ser homem jogando pra não reconhcer a voz desse gostoso!",
      extraInfoWin: "Quem não reconheceria a voz desse gostosão?",
      totalAnswers: 4,
      optiona: "Cauã Reymond",
      optionb: "Sergio Marone",
      optionc: "Vitor Belfort",
      optiond: "Popó (Acelino Freitas)",
    },
    {
      // Question 9
      answer: 4,
      text1: "DE QUEM É A VOZ?",
      text2: null,
      extraInfoLoose: "Presta atenção! Você está irritando a Maria Santa!",
      extraInfoWin: "Maria Santa sonha em dar uns pegas no Bruno Gagliasso!",
      totalAnswers: 4,
      optiona: "Vladimir Brichta",
      optionb: "Rodrigo Santoro",
      optionc: "Caio Castro",
      optiond: "Bruno Gagliasso",
    },
    {
      // Question 10
      answer: 3,
      text1: "DE QUEM É A VOZ?",
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
export default voiceQuiz;
