import React, { useContext } from "react";
import avatarWebp from "../image/avatar2.webp";
import avatarPng from "../image/avatar2.png";
import classes from "./Hero.module.css";
import { DarkModeContext } from "./context/DarkModeContext";
import { Link } from "react-scroll";


function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  const color = darkMode ? "white" : "black";
  return (
    <div id="home" className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className={`d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-5 gap-3 my-5 pt-3 ${classes.hero}`}>
        <div className={`${classes.avatar}`}>
          <picture>
            <source srcSet={avatarWebp} type="image/webp" />
            <img className={classes.img} src={avatarPng} alt="profile_photo" width="400" height="500" fetchpriority='high' />
          </picture>
        </div>

        <div className="text-center text-md-start">
          <div style={{ color: color }} className={classes.heroText}>
            <h1 className="fw-bold">Hello, There!</h1>
            <h1 className="fw-bold" id="app">
              I'm Saurabh Sharma
            </h1>
            <h2> Full Stack Developer</h2>
            <h4>Working
              <Link
                to='workExp'
                spy={true}
                smooth={true}
                offset={-60}
                duration={700}
                href='workExp'
                className={classes.currentWork}
                style={{ color: color }}
              >
                @Xpertdox
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
