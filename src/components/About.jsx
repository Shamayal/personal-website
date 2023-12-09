import "../styles/About.css";

import Photo from "../media/AboutMePhoto.jpeg";

const About = () => {
  return (
    <div>
      <p className="poppins-400-font">GET TO KNOW ME</p>
      <h1 className="poppins-800-font">About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p className="montserrat-400-font">
            Hello World! I'm Shamayal Syed, a Toronto-based full-stack web
            developer. Leveraging my background as a health science researcher,
            where my focus was on making technology accessible to people with
            dementia, I'm passionate about merging my coding skills with web
            accessibility principles to create impactful, user-friendly
            experiences across websites and applications.
          </p>
          <p className="montserrat-400-font">
            My experience in the dynamic insurance industry honed my ability to
            quickly grasp new technologies, frameworks, and programming
            languages – a crucial skill in the evolving field of web developmen
            My diverse background fosters adaptability, enabling me to thrive in
            different environments. Successfully transitioning between sectors,
            I bring a well-rounded skill set, quick acclimation to new project
            requirements, effective collaboration with cross-functional teams,
            and fresh insights to web development projects.
          </p>
          <p className="montserrat-400-font">
            Eager to apply my analytical prowess and problem-solving abilities
            to develop innovative solutions, I'm embarking on my journey into a
            junior developer role. I'm actively seeking the right company to
            further refine my coding skills. If you'd like to connect, feel free
            to send me a message on LinkedIn or use the contact form below!
          </p>
          <p className="montserrat-400-font">
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
            . I'm also an amateur travel photographer, and a sporadic blogger
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
