import "../styles/Projects.css";
import frogFinanceGif from "../media/FrogFinance.gif";
import photoLabsGif from "../media/PhotoLabs.gif";
import reFurnishGif from "../media/ReFurnish.gif";
import tweeterGif from "../media/Tweeter.gif";
import tinyAppPic from "../media/TinyApp.png";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const projectObj = [
  {
    title: "Frog Finance",
    gif: frogFinanceGif,
    alt: "Frog Finance Demo",
    techStack: "React, Node.js, PostgreSQL, Tailwind, CSS",
    description:
      "A full-stack, multi-page web application that allows users to track their income, and expenses, create savings and debt goals, view stocks, and learn about personal finance.",
    link: "https://github.com/Shamayal/frog-finance",
  },
  {
    title: "PhotoLabs",
    gif: photoLabsGif,
    alt: "PhotoLabs Demo",
    techStack: "React, Axios, JS, SCSS, PostgreSQL",
    description:
      "A React-based single-page application that allows users to view and like photos, and navigate through different photo categories.",
    link: "https://github.com/Shamayal/photolabs-starter",
  },
  {
    title: "Re-Furnish",
    gif: reFurnishGif,
    alt: "Re-Furnish Demo",
    techStack:
      "EJS, Node.js, Bootstrap, JS, Express, SASS, jQuery, Ajax, PostgreSQL",
    description:
      "A full stack, multi-page web application that allows users to browse furniture, 'like' and save listings to their favourites, and email the seller. Sellers can post and delete items for sale, and mark items as 'sold'.",
    link: "https://github.com/Shamayal/refurnish",
  },
  {
    title: "Tweeter",
    gif: tweeterGif,
    alt: "Tweeter Demo",
    techStack: "HTML, CSS, JS, jQuery, Ajax, Node.js, Express",
    description:
      "A simple, single-page Twitter clone that allows users to write and post tweets with a character limit of 140.",
    link: "https://github.com/Shamayal/tweeter",
  },
  // {
  //   title: "TinyApp",
  //   gif: tinyAppPic,
  //   alt: "TinyApp Demo",
  //   techStack: "Express, EJS, Node.js",
  //   description:
  //     "A full-stack web application that allows users to shorten and save long URLs.",
  //   link: "https://github.com/Shamayal/tinyapp",
  // },
];

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
      <div className="project-portfolio">
        {projectObj.map((project, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="projects-container"
          >
            <div>
              <h2 className="poppins-600-font">{project.title}</h2>
              <div className="project-gif-container">
                <img
                  src={project.gif}
                  alt={project.alt}
                  className="project-gif"
                />
                <div className="project-overlay">
                  <p className="montserrat-400-font">{project.description}</p>
                  <p className="montserrat-400-font">
                    <i>Tech Stack: {project.techStack}</i>
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="github-button">View on GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
