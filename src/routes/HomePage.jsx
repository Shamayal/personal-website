import Skills from "../components/Skills";
import About from "../components/About";
import TypewriterComponent from "../typewriter";

import "../styles/fonts.css";

import LinkedIn from "../media/LinkedIn.png";
import Email from "../media/Email.png";
import GitHub from "../media/GitHub.png";
import Medium from "../media/Medium.png";
import headshot from "../media/headshot.png";
import instagram from "../media/Instagram.png";

import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div class="intro">
        <h5>🙋‍♀️ Hi, thanks for stopping by!</h5>

        <div style={{ fontFamily: "Dancing Script, cursive" }}>
          <h1 class="name-heading">Shamayal Syed</h1>
        </div>

        <TypewriterComponent />

        <a
          class="resume-button"
          href="https://flowcv.com/resume/74ec7glopg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <h3>My Resume</h3>
          </div>
        </a>

        <div>
          <a href="https://www.linkedin.com/in/shamayal-syed/" target="_blank">
            <img src={LinkedIn} height="80px" alt="LinkedIn" />
          </a>

          <a href="mailto:shamayal.syed@outlook.com" target="_blank">
            <img src={Email} height="80px" alt="Email" />
          </a>

          <a href="https://github.com/Shamayal" target="_blank">
            <img src={GitHub} height="80px" alt="GitHub" />
          </a>

          <a href="https://medium.com/@shamayal" target="_blank">
            <img src={Medium} height="80px" alt="Medium" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
