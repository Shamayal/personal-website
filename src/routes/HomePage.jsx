import Skills from "../components/Skills";
import About from "../components/About";
import TypewriterComponent from "../typewriter"

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
      <h5>
        View my 
        <a href='https://flowcv.com/resume/74ec7glopg' target="_blank" rel="noopener noreferrer">
        resume
        </a>
      </h5>
  
      <h5>
        linkedIn
        github
        medium
        email
      </h5>

      <About />

      <Skills />

    </>

  );

};

export default HomePage;
