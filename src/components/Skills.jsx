// import "../../../styles/income.css"
import Python from "../media/Python Logo.png";
import HTML from "../media/HTML Logo.png";
import CSS from "../media/CSS Logo.png";
import JS from "../media/JavaScript Logo.png"
import Ruby from "../media/Ruby Logo.png"

const Skills = () => {
  return (
    <div>
      <h1>This is my skills page.</h1>
      <h2>Languages</h2>
      <h4>JavaScript, HTML, CSS, Ruby, Python</h4>
      <img src={JS} height="100px" alt="" />
      <img src={HTML} height="100px" alt="" />
      <img src={CSS} height="100px" alt="" />
      <img src={Ruby} height="100px" alt="" />
      <img src={Python} height="100px" alt="" />
      <h2>Databases</h2>
      <h4>PostgreSQL</h4>
      <h2>Frameworks/Libraries</h2>
      <h4>NodeJS, ReactJS, Ruby on Rails, Bootstrap, Express, jQuery, SASS, Ajax, EJS</h4>
      <h2>Design</h2>
      <h4>Figma, Adobe Photoshop, Adobe Lightroom, Canva</h4>
      <h2>Testing</h2>
      <h4>Cypress, Jest, Mocha, Chai</h4>
      <h2>Version Control</h2>
      <h4>Git</h4>
    </div>
  );
};

export default Skills;
