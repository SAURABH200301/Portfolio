import React, { useContext } from "react";
import avatar from "../image/avatar.png";
import classes from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import { DarkModeContext } from "./context/DarkModeContext";
import Zoom from "../Animation/Zoom.js";


function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  const color = darkMode ? "white" : "black";
  return (
    <div className={`text-center `}>
      <div className={`w-100 ${classes.avatar}`}>
        <Zoom>
          <img className={classes.img} src={avatar} alt="profile_photo" />
        </Zoom>
      </div>

      <div>
        <div className=" text-center p-3 m-2 w-100" style={{ color: color }}>
          <h1>Hello, There! </h1>
          <h1 className="m-2 p-3 w-100 " id="app">
            <Typewriter
              options={{
                strings: [
                  "I'm Saurabh Sharma",
                  "I'm Full Stack Developer!",
                  "I'm Freelancer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
