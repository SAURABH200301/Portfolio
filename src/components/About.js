import React from "react";
import SocialMedia from "./SocialMedia";
import Card from "./UI/Card";
import classes from "./About.module.css";

function About() {
  return (
    <div className="d-flex justify-content-around w-100 " id="about">
      <Card card="d-flex justify-content-center " width="80%">
        <SocialMedia />
        <div className={`text-center p-1`}>
          {/* <div className="d-flex justify-content-around text-center">
            <h5>#OPENTOWORK </h5>
          </div> */}
          <h1 className={classes.me}>About Me</h1>

          <div className="d-flex justify-content-around">
            <div className={classes.divider}></div>
          </div>
            <div className={`${classes.about_content} `}>
              Hi! I'm <span>Saurabh Sharma</span>, a Computer Science &
              Engineering student with <span>2 years of experience</span> as a
              <span> Programmer and Full Stack Developer</span>. I have worked
              on
              <span> 20+ projects</span> including frontend, backend, and
              full-stack applications. I love building scalable web applications
              and exploring modern technologies.
              <br /> To unwind, I enjoy playing Valorant, PUBG, and Chess
              (better than coffee sometimes 😉).
              <br />
              I'm constantly <span>looking for innovative ideas</span> to
              implement in the real world.
            </div>
        </div>
      </Card>
    </div>
  );
}

export default About;
