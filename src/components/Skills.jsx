// import "../../../styles/income.css"
import Python from "../media/Python Logo - Dark.png";
import HTML from "../media/HTML Logo - Dark.png";
import CSS from "../media/CSS Logo - Dark.png";
import JS from "../media/JavaScript Logo - Dark.png"
import Ruby from "../media/Ruby Logo - Dark.png"

import PSQL from "../media/PSQL Logo - Dark.png"

import NodeJS from "../media/NodeJS Logo - Dark.png"
import React from "../media/React Logo - Dark.png"
import RubyonRails from "../media/RubyonRails Logo - Dark.png"
import Bootstrap from "../media/Bootstrap Logo - Dark.png"
import jQuery from "../media/jQuery Logo - Dark.png"
import Sass from "../media/Sass Logo - Dark.png"

import Figma from "../media/Figma Logo - Dark.png"

import Photoshop from "../media/Photoshop Logo - Dark.png"
import Lightroom from "../media/Lightroom Logo - Dark.png"

import Git from "../media/Git Logo - Dark.png"

const Skills = () => {
  return (
    <div>
      <h1>This is my skills page.</h1>

      <h2>Languages</h2>
      <h4>JavaScript + ES6, HTML5, CSS, Ruby, Python</h4>
      <img src={JS} height="100px" alt="" />
      <img src={HTML} height="100px" alt="" />
      <img src={CSS} height="100px" alt="" />
      <img src={Ruby} height="100px" alt="" />
      <img src={Python} height="100px" alt="" />

      <h2>Databases</h2>
      <h4>PostgreSQL</h4>
      <img src={PSQL} height="100px" alt="" />

      <h2>Frameworks/Libraries</h2>
      <h4>NodeJS, ReactJS, Ruby on Rails, Bootstrap, Tailwind CSS, Express, jQuery, SASS, Ajax, EJS</h4>
      <img src={NodeJS} height="100px" alt="" />
      <img src={React} height="100px" alt="" />
      <img src={RubyonRails} height="100px" alt="" />
      <img src={Bootstrap} height="100px" alt="" />
      <img src={Bootstrap} height="100px" alt="" />
      <img src={NodeJS} height="100px" alt="" />
      <img src={jQuery} height="100px" alt="" />
      <img src={Sass} height="100px" alt="" />
      <img src={NodeJS} height="100px" alt="" />
      <img src={NodeJS} height="100px" alt="" />

      <h2>Design</h2>
      <h4>Figma, Adobe Photoshop, Adobe Lightroom, Canva</h4>
      <img src={Figma} height="100px" alt="" />
      <img src={Photoshop} height="100px" alt="" />
      <img src={Lightroom} height="100px" alt="" />
      <img src={NodeJS} height="100px" alt="" />

      <h2>Testing</h2>
      <h4>Cypress, Jest, Mocha, Chai</h4>
      <h2>Version Control</h2>
      <h4>Git</h4>
      <img src={Git} height="100px" alt="" />

    </div>
  );
};

export default Skills;
