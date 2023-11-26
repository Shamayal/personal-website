import "../styles/About.css";

import Photo from "../media/AboutMePhoto.jpeg";

const About = () => {
  return (
    <div>
      <p className="poppins-400-font">GET TO KNOW ME</p>
      <h1 className="poppins-800-font">About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p>Hello World! I'm Afua Deborah, a Front-End Web Developer based out of Toronto. From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.

Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.

I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form below or check me out at:</p>
          <p className="montserrat-400-font">
            Hello World! I'm Shamayal Syed, a full-stack web developer located in Toronto, Canada. As a health science researcher turned full-stack web developer, I'm
            eager to merge my interest in coding with my passion to create
            impactful user experiences and make a meaningful difference in the
            world of technology. I'm currently continuing my learning journey
            and seeking my first role as a junior developer. I am excited to
            contribute my newfound expertise, analytical skills, and
            problem-solving abilities to develop innovative solutions.
          </p>
          <p className="montserrat-400-font">
            Previously, I worked in a research lab dedicated to enhancing the
            user experience. This position instilled in me a deep understanding
            of the importance of creating user-friendly interfaces, optimizing
            website performance, and adhering to best practices in web
            accessibility standards. I can bring this perspective to my work as
            a web developer, as I believe technology can improve people's lives.
          </p>
          <p className="montserrat-400-font">
            I have demonstrated a strong ability to quickly learn and adapt, as
            seen during my time in the insurance industry. The dynamic nature of
            the industry required me to rapidly grasp new concepts and adapt to
            evolving business environments. This experience has honed my agility
            and ability to learn new technologies, frameworks, and programming
            languages efficiently, which is valuable in the constantly evolving
            field of web development.
          </p>
          <p className="montserrat-400-font">
            My varied background has equipped me with the adaptability necessary
            to thrive in different environments and industries. I have
            successfully transitioned between diverse sectors, which has
            provided me with a well-rounded skill set. This adaptability enables
            me to quickly acclimate to new project requirements, collaborate
            effectively with cross-functional teams, and bring fresh insights to
            web development projects.
          </p>
          <p className="montserrat-400-font">
            🍰 In my free time, I enjoy baking pastries, and other confections
            which I document on my food blog, Ma Ze Dar Creations. link the blog here
            Talk about my Medium Blog and link it
          </p>
        </div>
        <div>
          <img src={Photo}/>
        </div>
      </div>
    </div>
  );
};

export default About;
