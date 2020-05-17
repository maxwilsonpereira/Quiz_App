import React from "react";
// React Router DOM:(helps to router URLs to components).
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// OBS: YOU SHOULD USE WITH LINK TO AVOID PAGE REFRESHING!
// On this app you are routing "wrong" to proposital refresh
// to stop audio from playing
// import { Link } from "react-router-dom";
// <Link to="/whatever">Whatever</Link>
// <Link to={{
//   pathname: "/whatever",
//   hash: "#sometag"
// }}>Some Page</Link>

// import Footer from "../src/components/Footer/Footer";
import "./App.css";
import HomePage from "./Pages/IntroPages/HomePage";
import IntroPortugues from "./Pages/IntroPages/IntroPortugues.js";
import IntroEnglish from "./Pages/IntroPages/IntroEnglish";
import EnglishQuizIntro from "./Pages/QuizBasic/English/EnglishQuizIntro";
import EnglishQuizEasy from "./Pages/QuizBasic/English/Easy";
import EnglishQuizHard from "./Pages/QuizBasic/English/Hard";
import MusicalQuizIntro from "./Pages/QuizBasic/Musical/MusicalQuizIntro";
import MusicalQuiz from "./Pages/QuizBasic/Musical/MusicalQuiz";
import OperaQuizIntro from "./Pages/QuizBasic/Opera/OperaQuizIntro";
import OparaQuiz from "./Pages/QuizBasic/Opera/OperaQuiz";
import TenorQuizIntro from "./Pages/QuizBasic/Tenor/TenorQuizIntro";
import TenorQuiz from "./Pages/QuizBasic/Tenor/TenorQuiz";
import VoiceQuizIntro from "./Pages/QuizBasic/Voice/VoiceQuizIntro";
import VoiceQuiz from "./Pages/QuizBasic/Voice/VoiceQuiz";
import MovieQuizIntro from "./Pages/QuizBasic/Movie/MovieQuizIntro";
import MovieQuiz from "./Pages/QuizBasic/Movie/MovieQuiz";
import MovieQuizIntroEn from "./Pages/ENGLISH-APP/Movie/MovieQuizIntroEn";
import MovieQuizEn from "./Pages/ENGLISH-APP/Movie/MovieQuizEn";
import OperaQuizIntroEn from "./Pages/ENGLISH-APP/Opera/OperaQuizIntroEn";
import OperaQuizEn from "./Pages/ENGLISH-APP/Opera/OperaQuizEn";
import MusicalQuizIntroEn from "./Pages/ENGLISH-APP/Musical/MusicalQuizIntroEn";
import MusicalQuizEn from "./Pages/ENGLISH-APP/Musical/MusicalQuizEn";
import TenorQuizIntroEn from "./Pages/ENGLISH-APP/Tenor/TenorQuizIntroEn";
import TenorQuizEn from "./Pages/ENGLISH-APP/Tenor/TenorQuizEn";
import VoiceQuizIntroEn from "./Pages/ENGLISH-APP/Voice/VoiceQuizIntroEn";
import VoiceQuizEn from "./Pages/ENGLISH-APP/Voice/VoiceQuizEn";
import EnglishQuizIntroEn from "./Pages/ENGLISH-APP/English/EnglishQuizIntroEn";
import EnglishQuizEn from "./Pages/ENGLISH-APP/English/EnglishQuizEn";

// *** ATENTION: THE ORDER OF THE PAGES WILL AFFECT THE RESULTS!
// *** THE ROOT COMPONENT <Route path="/"> MUST BE AT THE BOTTOM!
function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <div className="App">
            <Switch>
              {/* ENGLISH PART: */}
              <Route path="/englishquiz-en" component={EnglishQuizEn} />
              <Route
                path="/englishquizintro-en"
                component={EnglishQuizIntroEn}
              />
              <Route path="/voicequiz-en" component={VoiceQuizEn} />
              <Route path="/voicequizintro-en" component={VoiceQuizIntroEn} />
              <Route path="/tenorquiz-en" component={TenorQuizEn} />
              <Route path="/tenorquizintro-en" component={TenorQuizIntroEn} />
              <Route path="/musicalquiz-en" component={MusicalQuizEn} />
              <Route
                path="/musicalquizintro-en"
                component={MusicalQuizIntroEn}
              />
              <Route path="/operaquiz-en" component={OperaQuizEn} />
              <Route path="/operaquizintro-en" component={OperaQuizIntroEn} />
              <Route path="/moviequiz-en" component={MovieQuizEn} />
              <Route path="/moviequizintro-en" component={MovieQuizIntroEn} />
              {/* PORTUGUES PART: */}
              <Route path="/moviequiz" component={MovieQuiz} />
              <Route path="/moviequizintro" component={MovieQuizIntro} />
              <Route path="/voicequiz" component={VoiceQuiz} />
              <Route path="/voicequizintro" component={VoiceQuizIntro} />
              <Route path="/tenorquiz" component={TenorQuiz} />
              <Route path="/tenorquizintro" component={TenorQuizIntro} />
              <Route path="/operaquiz" component={OparaQuiz} />
              <Route path="/operaquizintro" component={OperaQuizIntro} />
              <Route path="/musicalquiz" component={MusicalQuiz} />
              <Route path="/musicalquizintro" component={MusicalQuizIntro} />
              <Route path="/englishquizhard" component={EnglishQuizHard} />
              <Route path="/englishquizeasy" component={EnglishQuizEasy} />
              <Route path="/englishquizintro" component={EnglishQuizIntro} />
              {/* INTRO PART: */}
              <Route path="/introenglish">
                <IntroEnglish />
              </Route>
              <Route path="/introportugues">
                <IntroPortugues />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
