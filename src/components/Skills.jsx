import "../styles/Skills.css";

import JS from "../media/JavaScript Logo - Dark.png";
import HTML from "../media/HTML Logo - Dark.png";
import CSS from "../media/CSS Logo - Dark.png";
import Ruby from "../media/Ruby Logo - Dark.png";
import Python from "../media/Python Logo - Dark.png";

import PSQL from "../media/PSQL Logo - Dark.png";

import NodeJS from "../media/NodeJS Logo - Dark.png";
import ReactSkill from "../media/React Logo - Dark.png";
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

import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const languages = [
    { name: 'JavaScript ES6', imgSrc: JS },
    { name: 'HTML5', imgSrc: HTML },
    { name: 'CSS3', imgSrc: CSS },
    { name: 'Ruby', imgSrc: Ruby },
    { name: 'Python', imgSrc: Python },
  ];
  
  const frameworks = [
    { name: "Node.js", imgSrc: NodeJS },
    { name: "React", imgSrc: ReactSkill },
    { name: "Ruby on Rails", imgSrc: RubyonRails },
    { name: "Bootstrap", imgSrc: Bootstrap },
    { name: "Express", imgSrc: Express },
  ];

  const libraries = [
    { name: "jQuery", imgSrc: jQuery },
    { name: "Tailwind CSS", imgSrc: Tailwind },
    { name: "Sass", imgSrc: Sass },
    // { name: "Asynchronous JS And XML", imgSrc: AJAX },
    // { name: "Embedded JavaScript", imgSrc: EJS },
  ];

  const databases = [
    { name: 'PostgreSQL', imgSrc: PSQL },
  ];

  const designTools = [
    { name: 'Figma', imgSrc: Figma },
    { name: 'Adobe Photoshop', imgSrc: Photoshop },
    { name: 'Adobe Lightroom', imgSrc: Lightroom },
    { name: 'Canva', imgSrc: Canva },
  ];

  const testingTools = [
    { name: 'Cypress', imgSrc: Cypress },
    { name: 'Jest', imgSrc: Jest },
    { name: 'Mocha', imgSrc: Mocha },
    { name: 'Chai', imgSrc: Chai },
  ];

  const versionControl = [
    { name: 'Git', imgSrc: Git },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const filterItems = (items) => {
    if (activeFilter === 'all') {
      return items;
    } else {
      return items.filter(item => item.category === activeFilter);
    }
  };

  return (
    <div>
      <p className="poppins-400-font">MY TECHNICAL ABILITIES</p>
      <h1 className="poppins-800-font">Skills</h1>

      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('languages')}>Languages</button>
        <button onClick={() => handleFilter('frameworks')}>Frameworks</button>
        <button onClick={() => handleFilter('libraries')}>Libraries</button>
        <button onClick={() => handleFilter('databases')}>Databases</button>
        <button onClick={() => handleFilter('design')}>Design</button>
        <button onClick={() => handleFilter('testing')}>Testing</button>
        <button onClick={() => handleFilter('versionControl')}>Version Control</button>
      </div>

      <div className="skills-container">
        {filterItems([
          ...languages.map(item => ({ ...item, category: 'languages' })),
          ...frameworks.map(item => ({ ...item, category: 'frameworks' })),
          ...libraries.map(item => ({ ...item, category: 'libraries' })),
          ...databases.map(item => ({ ...item, category: 'databases' })),
          ...designTools.map(item => ({ ...item, category: 'design' })),
          ...testingTools.map(item => ({ ...item, category: 'testing' })),
          ...versionControl.map(item => ({ ...item, category: 'versionControl' })),
        ]).map((item) => (
          <div className="skills-container-item" key={item.name}>
            <img src={item.imgSrc} alt={item.name} className="skills-img" data-aos="zoom-in" data-aos-duration="2000" />
            <p className="montserrat-400-font skills-font">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="h2-container">
        <h2 className="poppins-600-font">Version Control</h2>
      </div>
    </div>
  );
};

export default Skills;
