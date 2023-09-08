import TypewriterComponent from "../typewriter";

import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import "../styles/fonts.css";
import "../styles/HomePage.css";

import LinkedIn from "../media/LinkedIn.png";
import GitHub from "../media/GitHub.png";
import Medium from "../media/Medium.png";
import Email from "../media/Email.png";
import headshot from "../media/headshot.png";
import instagram from "../media/Instagram.png";

import DarkMode from "../media/Shamayal - Dark Mode.svg";
import LightMode from "../media/Shamayal - Light Mode.svg";

const HomePage = () => {
  return (
    <>
      <div>
        <div class="intro">
          <div class="intro-content">
            <h2 className="poppins-400-font">🙋‍♀️ Hi, thanks for stopping by!</h2>
            <img src={LightMode} alt="" />
          </div>

          <div class="intro-details">
            <div class="icon-container">
              <a
                href="https://www.linkedin.com/in/shamayal-syed/"
                target="_blank"
                title="My LinkedIn Profile"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Shamayal"
                target="_blank"
                title="My GitHub Profile"
              >
                <img src={GitHub} alt="GitHub" />
              </a>

              <a
                href="https://medium.com/@shamayal"
                target="_blank"
                title="My Blog on Medium"
              >
                <img src={Medium} alt="Medium" />
              </a>

              <a
                href="mailto:shamayal.syed@outlook.com"
                target="_blank"
                title="My Email Address"
              >
                <img src={Email} alt="Email" />
              </a>
            </div>

            <div class="typewriter">
              <TypewriterComponent />
            </div>

            <div class="resume-button">
              <a
                href="https://flowcv.com/resume/74ec7glopg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="poppins-400-font">My Resume</h3>
              </a>
            </div>

          </div>
        </div>

        <div id="about">
          <About />
        </div>
        <br/>
        <div id="skills">
          <Skills />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
