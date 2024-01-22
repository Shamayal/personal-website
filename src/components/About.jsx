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
            Hello World! I'm Shamayal Syed, a Toronto-based software developer
            with a passion for creating impactful user-friendly experiences
            through coding and accessibility. My journey began as a qualitative
            researcher at the Toronto Rehabilitation Institute, where I delved
            into making technology accessible to people with dementia.
          </p>
          <p className="montserrat-600-font">
            My diverse background includes a short period working in the dynamic
            insurance industry which honed my ability to quickly grasp new
            technologies, frameworks, and programming languages – a crucial
            skill in the evolving field of web development.
          </p>
          <p className="montserrat-600-font">
            Now as a junior developer, I apply my analytical skills and
            problem-solving abilities to create innovative solutions. I am
            actively committed to advancing my skills and expanding my knowledge
            on my career in software development.
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
            . I'm also an amateur travel photographer, avid reader, and sporadic
            blogger chronicling my coding journey.
          </p>
          <p className="montserrat-600-font">
            If you're curious to learn more about my coding journey, explore my
            portfolio or connect with me on social media. I'm always open to
            book recommendations and conversations!
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
