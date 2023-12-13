import "../styles/Projects.css";

const Projects = () => {
  return (
    <div>
      <p className="poppins-400-font">WHAT I'VE WORKED ON</p>
      <h2 className="poppins-800-font">My Projects</h2>

      <div className="projects-container">
        <h2 className="poppins-600-font">Frog Finance</h2>
        <p className="montserrat-400-font">
          <i>Tech Stack: React, Node.js, PostgreSQL, Tailwind, CSS</i>
        </p>
        <p className="montserrat-400-font">
          A full-stack, multi-page web application that allows users to track
          their income, and expenses, create savings and debt goals, view
          stocks, and learn about personal finance.
        </p>
      </div>

      <h2 className="poppins-600-font">PhotoLabs</h2>
      <p className="montserrat-400-font">
        <i>Tech Stack: React, Axios, JS, SCSS, PostgreSQL</i>
      </p>
      <p className="montserrat-400-font">
        A React-based single-page application that allows users to view and
        "like" photos, and navigate through different photo categories.
      </p>

      <h2 className="poppins-600-font">re-furnish</h2>
      <p className="montserrat-400-font">
        <i>Tech Stack: EJS, Node.js, Bootstrap, JS, Express, SASS, jQuery, Ajax,
        PostgreSQL</i>
      </p>
      <p className="montserrat-400-font">
        A full stack, multi-page web application that allows users to browse
        furniture, "like" and save listings to their favourites, and email the
        seller. Sellers can post and delete items for sale, and mark items as
        "sold".
      </p>

      <h2 className="poppins-600-font">Tweeter</h2>
      <p className="montserrat-400-font">
        <i>Tech Stack: HTML, CSS, JS, jQuery, Ajax, Node.js, Express</i>
      </p>
      <p className="montserrat-400-font">
        A simple, single-page Twitter clone that allows users to write and post
        tweets with a character limit of 140.
      </p>

      <h2 className="poppins-600-font">TinyApp</h2>
      <p className="montserrat-400-font"><i>Tech Stack: Express, EJS, Node.js</i></p>
      <p className="montserrat-400-font">
        A full-stack web application that allows users to shorten and save long
        URLs.
      </p>
    </div>
  );
};

export default Projects;
