import React, { useContext } from "react";
import avatar from "../image/avatar-1.png";
import classes from "./Hero.module.css";
import { DarkModeContext } from "./context/DarkModeContext";


function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  const color = darkMode ? "white" : "black";
  return (
    <div className={`text-center `}>
      <div className={`w-100 ${classes.avatar}`}>
          <img className={classes.img} src={avatar} alt="profile_photo" />
      </div>

      <div>
        <div className=" text-center p-3 m-2 w-100" style={{ color: color }}>
          <h1>Hello, There! </h1>
          <h1 className="m-2 p-3 w-100 " id="app">
            I'm Saurabh Sharma
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
