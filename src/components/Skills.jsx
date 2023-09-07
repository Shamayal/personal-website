// import "../../../styles/income.css"
import JS from "../media/JavaScript Logo - Dark.png";
import HTML from "../media/HTML Logo - Dark.png";
import CSS from "../media/CSS Logo - Dark.png";
import Ruby from "../media/Ruby Logo - Dark.png";
import Python from "../media/Python Logo - Dark.png";

import PSQL from "../media/PSQL Logo - Dark.png";

import NodeJS from "../media/NodeJS Logo - Dark.png";
import React from "../media/React Logo - Dark.png";
import RubyonRails from "../media/RubyonRails Logo - Dark.png";
import Bootstrap from "../media/Bootstrap Logo - Dark.png";
import Tailwind from "../media/Tailwind Logo - Dark.png";
import Express from "../media/Express Logo - Dark.png";
import jQuery from "../media/jQuery Logo - Dark.png";
import Sass from "../media/Sass Logo - Dark.png";
import AJAX from "../media/AJAX Logo - Dark.png";
import EJS from "../media/EJS Logo - Dark.png";

import Figma from "../media/Figma Logo - Dark.png";
import Photoshop from "../media/Photoshop Logo - Dark.png";
import Lightroom from "../media/Lightroom Logo - Dark.png";
import Canva from "../media/Canva Logo - Dark.png";

import Cypress from "../media/Cypress Logo - Dark.png";
import Jest from "../media/Jest Logo - Dark.png";
import Mocha from "../media/Mocha Logo - Dark.png";
import Chai from "../media/Chai Logo - Dark.png";

import Git from "../media/Git Logo - Dark.png";

const Skills = () => {
  return (
    <div>
      <h1>This is my skills page.</h1>

      <h2>Languages</h2>
      <div>
        <div>
          <img src={JS} height="60px" alt="" />
          <p>JavaScript ES6</p>
        </div>

        <img src={HTML} height="60px" alt="" />
        <p>HTML5</p>
        <img src={CSS} height="60px" alt="" />
        <p>CSS3</p>
        <img src={Ruby} height="60px" alt="" />
        <p>Ruby</p>
        <img src={Python} height="60px" alt="" />
        <p>Python</p>
      </div>

      <h2>Databases</h2>
      <div>
        <img src={PSQL} height="60px" alt="" />
        <p>PostgreSQL</p>
      </div>

      <h2>Frameworks/Libraries</h2>
      <div>
        <img src={NodeJS} height="60px" alt="" />
        <p>Node.js</p>
        <img src={React} height="60px" alt="" />
        <p>React</p>
        <img src={RubyonRails} height="60px" alt="" />
        <p>Ruby on Rails</p>
        <img src={Bootstrap} height="60px" alt="" />
        <p>Bootstrap</p>
        <img src={Tailwind} height="60px" alt="" />
        <p>Tailwind CSS</p>
        <img src={Express} height="60px" alt="" />
        <p>Express</p>
        <img src={jQuery} height="60px" alt="" />
        <p>jQuery</p>
        <img src={Sass} height="60px" alt="" />
        <p>Sass</p>
        <img src={AJAX} height="60px" alt="" />
        <p>AJAX (Asynchronous JavaScript And XML)</p>
        <img src={EJS} height="60px" alt="" />
        <p>Embedded JavaScript</p>
      </div>

      <h2>Design</h2>
      <div>
        <img src={Figma} height="60px" alt="" />
        <p>Figma</p>
        <img src={Photoshop} height="60px" alt="" />
        <p>Adobe Photoshop</p>
        <img src={Lightroom} height="60px" alt="" />
        <p>Adobe Lightroom</p>
        <img src={Canva} height="60px" alt="" />
        <p>Canva</p>
      </div>

      <h2>Testing</h2>
      <div>
        <img src={Cypress} height="60px" alt="Cypress" />
        <p>Cypress</p>
        <img src={Jest} height="60px" alt="Jest" />
        <p>Jest</p>
        <img src={Mocha} height="60px" alt="Mocha" />
        <p>Mocha</p>
        <img src={Chai} height="60px" alt="Chai" />
        <p>Chai</p>
      </div>

      <h2>Version Control</h2>
      <div>
        <img src={Git} height="60px" alt="Git" />
        <p>Git</p>
      </div>
    </div>
  );
};

export default Skills;
