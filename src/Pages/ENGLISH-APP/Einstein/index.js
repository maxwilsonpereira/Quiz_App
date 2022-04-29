// SAMPLE AT:
// https://www.brainzilla.com/logic/zebra/einsteins-riddle/

import React from "react";

import logo from "../../../assets/logos/einstein.png";
import Button from "../../../../src/components/UI/Button/Button";
import classes from "../../../Pages/Pages.module.css";
import classesEinstein from "./style.module.css";

export default function EinsteinEn(props) {
  return (
    <div className={classesEinstein.EinsteinContainer}>
      <br className={classes.MobileDontShow} />
      <img
        src={logo}
        className={[classes.responsive, classes.LogoQuiz].join(" ")}
        alt="English Quiz"
      />
      <br className={classes.MobileDontShow} />
      <br />
      <h2
        className={classes.FontColorRed}
        style={{ fontSize: 60, textAlign: "center", marginBottom: 120 }}
      >
        COMING SOON!
      </h2>
      {/* <h2 className={classes.FontColorRed}>BASIC RULE:</h2> */}
      <h2></h2>
      <span
        className={[classes.centered, classes.CorrectionQuizMargin].join(" ")}
      >
        <Button linkToGo="/introenglish" btnType="BtnYellow">
          BACK TO MENU
        </Button>
      </span>
    </div>
  );
}
