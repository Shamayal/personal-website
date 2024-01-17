import "../styles/Blog.css";

const Blog = () => {
  return (
    <div id="blog">
      <p className="poppins-400-font">READ MY ARTICLES</p>
      <h1 className="poppins-800-font">My Blog</h1>

      <a
        href="https://medium.com/@shamayal/bootcamp-vs-traditional-education-my-experience-and-insights-8648f07dcc7b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="blog-container">
          <div className="blog-text">
            <h2 className="poppins-600-font">
              Bootcamp vs. Traditional Education: My Experience and Insights
            </h2>

            <p className="montserrat-400-font">Oct 25, 2023</p>
          </div>
        </div>
      </a>

      <a
        href="https://medium.com/@shamayal/toronto-tech-trek-the-chronicles-of-my-elevate-festival-experience-51e358a22b73"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="blog-container">
          <div className="blog-text">
            <h2 className="poppins-600-font">
              Toronto Tech Trek: The Chronicles of My Elevate Festival
              Experience
            </h2>

            <p className="montserrat-400-font">Sep 30, 2023</p>
          </div>
        </div>
      </a>

      <a
        href="https://medium.com/@shamayal/the-challenges-and-triumphs-of-learning-to-code-in-a-bootcamp-setting-162ee7966c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="blog-container">
          <div className="blog-text">
            <h2 className="poppins-600-font">
              The Challenges and Triumphs of Learning to Code in a Bootcamp
              Setting
            </h2>

            <p className="montserrat-400-font">Jul 31, 2023</p>
          </div>
        </div>
      </a>

      <a
        href="https://medium.com/@shamayal/navigating-a-coding-bootcamp-7-shining-beacons-of-advice-to-guide-you-through-the-tempestuous-41050ae18272"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="blog-container">
          <div className="blog-text">
            <h2 className="poppins-600-font">
              Navigating a Coding Bootcamp: 7 Shining Beacons of Advice to Guide
              you Through the Tempestuous Waters
            </h2>

            <p className="montserrat-400-font">Jul 25, 2023</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;
