import "../styles/Projects.css";
import frogFinanceGif from "../media/FrogFinance.gif";
import photoLabsGif from "../media/PhotoLabs.gif";
import reFurnishGif from "../media/ReFurnish.gif";
import tweeterGif from "../media/Tweeter.gif";
import tinyAppPic from "../media/TinyApp.png";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const project = [
  {
    title: "Frog Finance",
    gif: require("../media/FrogFinance.gif").default,
    alt: "Frog Finance Demo",
    techStack: "React, Node.js, PostgreSQL, Tailwind, CSS",
    description:
      "A full-stack, multi-page web application that allows users to track their income, and expenses, create savings and debt goals, view stocks, and learn about personal finance.",
    link: "https://github.com/Shamayal/frog-finance",
  },
  {
    title: "PhotoLabs",
    gif: require("../media/PhotoLabs.gif").default,
    alt: "PhotoLabs Demo",
    techStack: "React, Axios, JS, SCSS, PostgreSQL",
    description: 
      "A React-based single-page application that allows users to view and like photos, and navigate through different photo categories.",
    link: "https://github.com/Shamayal/photolabs-starter",
  },
  {
    title: "Re-Furnish",
    gif: require("../media/ReFurnish.gif").default,
    alt: "Re-Furnish Demo",
    techStack: "EJS, Node.js, Bootstrap, JS, Express, SASS, jQuery, Ajax, PostgreSQL",
    description:
      "A full stack, multi-page web application that allows users to browse furniture, 'like' and save listings to their favourites, and email the seller. Sellers can post and delete items for sale, and mark items as 'sold'.",
    link: "https://github.com/Shamayal/refurnish",
  },
  {
    title: "Tweeter",
    gif: require("../media/Tweeter.gif").default,
    alt: "Tweeter Demo",
    techStack: "HTML, CSS, JS, jQuery, Ajax, Node.js, Express",
    description:
      "A simple, single-page Twitter clone that allows users to write and post tweets with a character limit of 140.",
    link: "https://github.com/Shamayal/tweeter",
  },
  {
    title: "TinyApp",
    gif: require("../media/TinyApp.png").default,
    alt: "TinyApp Demo",
    techStack: "Express, EJS, Node.js",
    description:
      "A full-stack web application that allows users to shorten and save long URLs.",
    link: "https://github.com/Shamayal/tinyapp",
  },
]
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects">
      <p className="poppins-400-font">WHAT I'VE WORKED ON</p>
      <h1 className="poppins-800-font">My Projects</h1>
      <p className="montserrat-400-font">
          Hover over any project to learn more!
        </p>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="projects-container"
      >
        
        <div>
          <h2 className="poppins-600-font">Frog Finance</h2>
          <img
            src={frogFinanceGif}
            alt="Frog Finance Demo"
            className="project-gif"
          />
        </div>
        <div className="project-details">
          <p className="montserrat-400-font">
            <i>Tech Stack: React, Node.js, PostgreSQL, Tailwind, CSS</i>
          </p>
          <p className="montserrat-400-font">
            A full-stack, multi-page web application that allows users to track
            their income, and expenses, create savings and debt goals, view
            stocks, and learn about personal finance.
          </p>
          <a
            href="https://github.com/Shamayal/frog-finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View on GitHub</button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="projects-container"
      >
        <div>
          <h2 className="poppins-600-font">PhotoLabs</h2>
          <img
            src={photoLabsGif}
            alt="PhotoLabs Demo"
            className="project-gif"
          />
        </div>
        <div className="project-details">
          <p className="montserrat-400-font">
            <i>Tech Stack: React, Axios, JS, SCSS, PostgreSQL</i>
          </p>
          <p className="montserrat-400-font">
            A React-based single-page application that allows users to view and
            "like" photos, and navigate through different photo categories.
          </p>
          <a
            href="https://github.com/Shamayal/photolabs-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View on GitHub</button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="projects-container"
      >
        <div>
          <h2 className="poppins-600-font">re-furnish</h2>
          <img
            src={reFurnishGif}
            alt="re-furnish Demo"
            className="project-gif"
          />
        </div>
        <div className="project-details">
          <p className="montserrat-400-font">
            <i>
              Tech Stack: EJS, Node.js, Bootstrap, JS, Express, SASS, jQuery,
              Ajax, PostgreSQL
            </i>
          </p>
          <p className="montserrat-400-font">
            A full stack, multi-page web application that allows users to browse
            furniture, "like" and save listings to their favourites, and email
            the seller. Sellers can post and delete items for sale, and mark
            items as "sold".
          </p>
          <a
            href="https://github.com/Shamayal/refurnish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View on GitHub</button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="projects-container"
      >
        <div>
          <h2 className="poppins-600-font">Tweeter</h2>
          <img src={tweeterGif} alt="Tweeter Demo" className="project-gif" />
        </div>
        <div className="project-details">
          <p className="montserrat-400-font">
            <i>Tech Stack: HTML, CSS, JS, jQuery, Ajax, Node.js, Express</i>
          </p>
          <p className="montserrat-400-font">
            A simple, single-page Twitter clone that allows users to write and
            post tweets with a character limit of 140.
          </p>
          <a
            href="https://github.com/Shamayal/tweeter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View on GitHub</button>
          </a>
        </div>
      </div>

      <div className="projects-container">
        <div>
          <h2 className="poppins-600-font">TinyApp</h2>
          <img
            src={tinyAppPic}
            alt="TinyApp Demo"
            className="project-pic"
            height="300px"
          />
        </div>
        <div className="project-details">
          <p className="montserrat-400-font">
            <i>Tech Stack: Express, EJS, Node.js</i>
          </p>
          <p className="montserrat-400-font">
            A full-stack web application that allows users to shorten and save
            long URLs.
          </p>
          <a
            href="https://github.com/Shamayal/tinyapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
