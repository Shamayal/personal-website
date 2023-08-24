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
      <h5>🙋‍♀️ Hi, thanks for stopping by!</h5>

      <div style={{ fontFamily: "Dancing Script, cursive" }}>
        <h1>I'm Shamayal Syed</h1>
      </div>

      <TypewriterComponent />

      <h3>
        View My{" "}
        <a
          href="https://flowcv.com/resume/74ec7glopg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </h3>

      <div>
        <a href="https://www.linkedin.com/in/shamayal-syed/" target="_blank">
          <img src={LinkedIn} height="100px" alt="LinkedIn" />
        </a>

        <a href="mailto:shamayal.syed@outlook.com" target="_blank">
          <img src={Email} height="100px" alt="Email" />
        </a>

        <a href="https://github.com/Shamayal" target="_blank">
          <img src={GitHub} height="100px" alt="GitHub" />
        </a>

        <a href="https://medium.com/@shamayal" target="_blank">
          <img src={Medium} height="100px" alt="Medium" />
        </a>
      </div>
    </>
  );
};

export default HomePage;
