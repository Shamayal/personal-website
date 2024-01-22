import "../styles/About.css";

import Photo from "../media/AboutMePhoto.jpeg";

const About = () => {
  return (
    <div>
      <p className="poppins-400-font">GET TO KNOW ME</p>
      <h1 className="poppins-800-font">About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p className="montserrat-600-font">
            Hello World! I'm Shamayal Syed, a Toronto-based full-stack web
            developer. My journey began as a student researcher at the Toronto
            Rehabilitation Institute, where I focused on making technology
            accessible to people with dementia, I'm passionate about merging my
            coding skills with web accessibility principles to create impactful,
            user-friendly experiences across websites and applications.
          </p>
          <p className="montserrat-600-font">
            Drawing from my experience in the dynamic insurance industry honed
            my ability to quickly grasp new technologies, frameworks, and
            programming languages – a crucial skill in the evolving field of web
            development. My diverse background fosters adaptability, enabling me
            to thrive in different environments. Successfully transitioning
            between sectors, I bring a well-rounded skill set, quick acclimation
            to new project requirements, effective collaboration with
            cross-functional teams, and fresh insights to web development
            projects.
          </p>
          <p className="montserrat-600-font">
            As a junior developer, I apply my analytical skills and
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
            . I'm also an amateur travel photographer, avid reader (feel free
            to reach out to me with any book recommendations!) and sporadic blogger
            chronicling my coding journey.
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
