import Skills from "../components/Skills";
import About from "../components/About";
import TypewriterComponent from "../typewriter"

import LinkedIn from "../media/linkedin (1).png";
import Email from "../media/email (1).png";
import GitHub from "../media/github (1).png";
import Medium from "../media/medium (1).png";
import headshot from "../media/headshot.png";
import instagram from "../media/Instagram.png";


const HomePage = () => {

  return (

    <>
      <h5>
        🙋‍♀️ Hi, thanks for stopping by!
      </h5>

      <h1>
        I'm Shamayal Syed
      </h1>

      <TypewriterComponent />

      <h3>
        View My{' '}
        <a href='https://flowcv.com/resume/74ec7glopg' target="_blank" rel="noopener noreferrer">
        Resume
        </a>
      </h3>

      <img src={LinkedIn} />

      <img src={Email} />

      <img src={GitHub} />

      <img src={Medium} />

      <About />

      <Skills />

    </>

  );

};

export default HomePage;
