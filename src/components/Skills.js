import React from "react";
import Card from "./UI/Card";
import classes from "./Skills.module.css";
import RenderSkills from "./RenderSkills";
import cpp from "../image/cpp.png";
import java from "../image/java.png";
import python from "../image/python.png";
import js from "../image/js.png";
import node from "../image/node.png";
import html from "../image/html.png";
import css from "../image/css.png";
import react from "../image/react.png";
import Boot from "../image/BS.png";
import github from "../image/github.png";
import git from "../image/git.png";
import ubuntu from "../image/ubuntu.png";
import vs from "../image/vs.png";
import firebase from "../image/firebase.png";
import mongo from "../image/mongo.png";
import redux from "../image/redux.png";
import express from "../image/express.png";
import angular from "../image/angulat.png";
import sass from "../image/sass.png";
import lodash from "../image/lodash.png";
import ts from "../image/typescript.png";
import axios from "../image/axios.png";
import tailwind from "../image/tailwind.svg";
import copliot from '../image/github-copilot.webp'

export const Pro_Lang = [
  {
    id: "CPP",
    src: cpp,
    class: classes.icon,
  },
  {
    id: "JAVA",
    src: java,
    class: classes.icon,
  },
  {
    id: "Python",
    src: python,
    class: classes.icon,
  },
  {
    id: "JavaScript",
    src: js,
    class: classes.icon,
  },
  {
    id: "TypeScript",
    src: ts,
    class: classes.icon,
  },
];
export const Backend = [
  {
    id: "Express",
    src: express,
    class: classes.icon,
  },
  {
    id: "Node",
    src: node,
    class: classes.icon,
  },
  {
    id: "Firebase",
    src: firebase,
    class: classes.icon,
  },
  {
    id: "MongoDB",
    src: mongo,
    class: classes.icon,
  },
  {
    id: "axios",
    src: axios,
    class: classes.icon,
  },
];
export const Frontend = [
  {
    id: "ReactJs",
    src: react,
    class: classes.icon,
  },
  {
    id: "Redux",
    src: redux,
    class: classes.icon,
  },
  {
    id: "Angular",
    src: angular,
    class: classes.icon,
  },
  {
    id: "HTML",
    src: html,
    class: classes.icon,
  },
  {
    id: "CSS",
    src: css,
    class: classes.icon,
  },
  {
    id: "SASS",
    src: sass,
    class: classes.icon,
  },

  {
    id: "Bootstrap",
    src: Boot,
    class: classes.icon,
  },
  {
    id: "LodashJS",
    src: lodash,
    class: classes.icon,
  },
  {
    id: "Tailwind CSS",
    src: tailwind,
    class: classes.icon,
  },
];
export const other = [
  {
    id: "GitHub",
    src: github,
    class: classes.icon,
  },
  {
    id: "GitHub Copliot",
    src: copliot,
    class: classes.icon,
  },
  {
    id: "Git",
    src: git,
    class: classes.icon,
  },
  {
    id: "Ubuntu",
    src: ubuntu,
    class: classes.icon,
  },
  {
    id: "VS Code",
    src: vs,
    class: classes.icon,
  },
];
function Skills() {
  return (
    <div className="d-flex justify-content-center w-100 mt-5" id="skills">
      <Card width="80%">
        <div className="mt-4">
          <h1 className="text-center">Skills</h1>
          <div className="d-flex justify-content-around">
            <div className={classes.divider}></div>
          </div>
          <div className={`row ${classes.margin}`}>
            <div className="col-md-6">
              <RenderSkills
                Pro_Lang={Pro_Lang}
                header="Programming Languages"
              />
            </div>

            <div className="col-md-6">
              <RenderSkills Pro_Lang={Backend} header="Backend" />
            </div>
            <div className="col-md-6">
              <RenderSkills Pro_Lang={Frontend} header="Frontend" />
            </div>
            <div className="col-md-6">
              <RenderSkills Pro_Lang={other} header="Other" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Skills;
