import "../styles/About.css";

// import Photo from "../media/AboutMePhoto.jpeg";
import Photo from "../media/AboutMePhoto1.png";

const About = () => {
  return (
    <div>
      <p className="poppins-400-font">GET TO KNOW ME</p>
      <h1 className="poppins-800-font">About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p className="montserrat-600-font">
            Hello World! 👋 I'm Shamayal Syed, a Toronto-based software developer.
          </p>
          {/* <p className="montserrat-600-font">
            At the Toronto Rehabilitation Institute, I studied the impacts of technology on people with dementia. This experience reignited my interest in coding and motivated me to improve my skills so I can contribute to projects that apply web accessibility principles to create impactful, user-friendly experiences across websites and applications.
          </p> */}
          <p className="montserrat-600-font">
             I'm eager to embrace new challenges and committed to being a lifelong learner. By continuously expanding my skill set, I aim to apply my analytical skills and problem-solving abilities to create innovative solutions, contribute effectively to team objectives, and grow in my tech career.
          </p>

          <p className="montserrat-600-font">
            In my free time, I indulge in baking pastries, and other confections
            which I document on my food blog,{" "}
            <a
              href="https://www.instagram.com/mazedarcreations/"
              target="_blank"
            >
              <i>
                <strong>Ma Ze Dar Creations</strong>
              </i>
            </a>
            . I'm also an avid reader, sporadic blogger chronicling my coding journey, and an amateur travel photographer capturing moments from my hiking adventures.
          </p>
          <p className="montserrat-600-font">
            If you're curious to learn more about my coding journey, explore my
            portfolio or connect with me on LinkedIn. I'm always open to
            book recommendations and insighful conversations!
          </p>
        </div>
        <div>
          <img src={Photo} />
        </div>
      </div>
    </div>
  );
};

export default About;
