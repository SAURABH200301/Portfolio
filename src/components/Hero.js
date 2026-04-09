import React, { useContext } from "react";
import avatar from "../image/avatar-1.png";
import classes from "./Hero.module.css";
import { DarkModeContext } from "./context/DarkModeContext";


function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  const color = darkMode ? "white" : "black";
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className={`d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-5 gap-3 my-5 pt-3 ${classes.hero}`}>
        <div className={`${classes.avatar}`}>
          <img className={classes.img} src={avatar} alt="profile_photo" fetchpriority='high' />
        </div>

        <div className="text-center text-md-start">
          <div style={{ color: color }}>
            <h1 className="fw-bold">Hello, There!</h1>
            <h1 className="fw-bold" id="app">
              I'm Saurabh Sharma
            </h1>
            <h2> Full Stack Developer</h2>
            <h4>Working @Xpertdox</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
