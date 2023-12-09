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
            Hello World! I'm Shamayal Syed, a Toronto-based full-stack web developer. As a health science researcher in the field of making technology accessible for people with dementia, turned full-stack web developer, I am passionate about contributing my coding skills to merging logic and accessibility to create user-friendly websites and applications and impactful user experiences.


            Currently seeking my first role as a junior developer, I bring analytical prowess and problem-solving abilities to develop innovative solutions.

            With prior experience in a research lab focused on enhancing user experience, I understand the importance of user-friendly interfaces, optimized website performance, and adherence to web accessibility standards. I believe technology can improve lives.

            Demonstrating quick learning and adaptability, my time in the insurance industry equipped me to efficiently grasp new technologies, frameworks, and programming languages. This agility is crucial in the evolving field of web development.

            My diverse background fosters adaptability, allowing me to thrive in different environments. Successfully transitioning between sectors, I bring a well-rounded skill set, quick acclimation to new project requirements, effective collaboration with cross-functional teams, and fresh insights to web development projects.

            I'm excited to make the leap and continue refining my skills with the right company. Send me a message in the contact form below or message me on LinkedIn!

            eager to merge my interest in coding with my passion to create
            impactful user experiences and make a meaningful difference in the
            world of technology. 
            
            I'm currently continuing my learning journey
            and seeking my first role as a junior developer. I am excited to
            contribute my newfound expertise, analytical skills, and
            problem-solving abilities to develop innovative solutions.
            make this shorter
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
            In my free time, I enjoy baking pastries, and other confections which I document on my food blog, <a href="https://www.instagram.com/mazedarcreations/" target="_blank"><strong>Ma Ze Dar Creations</strong></a>. I'm also an amateur travel photographer, and I like to write for my blog.
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