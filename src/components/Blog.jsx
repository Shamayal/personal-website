import "../styles/Blog.css";

import article1 from "../media/article1.jpeg";
import article2 from "../media/article2.jpeg";
import article3 from "../media/article3.jpeg";
import article4 from "../media/article4.jpeg";

const articles = [
  {
    title: "Bootcamp vs. Traditional Education: My Experience and Insights",
    date: "Oct 25, 2023",
    link: "https://medium.com/@shamayal/bootcamp-vs-traditional-education-my-experience-and-insights-8648f07dcc7b",
    image: article4,
  },
  {
    title:
      "Toronto Tech Trek: The Chronicles of My Elevate Festival Experience",
    date: "Sep 30, 2023",
    link: "https://medium.com/@shamayal/toronto-tech-trek-the-chronicles-of-my-elevate-festival-experience-51e358a22b73",
    image: article3,
  },
  {
    title:
      "The Challenges and Triumphs of Learning to Code in a Bootcamp Setting",
    date: "Jul 31, 2023",
    link: "https://medium.com/@shamayal/the-challenges-and-triumphs-of-learning-to-code-in-a-bootcamp-setting-162ee7966c",
    image: article2,
  },
  {
    title:
      "Navigating a Coding Bootcamp: 7 Shining Beacons of Advice to Guide you Through the Tempestuous Waters",
    date: "Jul 25, 2023",
    link: "https://medium.com/@shamayal/navigating-a-coding-bootcamp-7-shining-beacons-of-advice-to-guide-you-through-the-tempestuous-41050ae18272",
    image: article1,
  },
];

const Blog = () => {
  return (
    <div id="blog">
      <p className="poppins-400-font">READ MY ARTICLES</p>
      <h1 className="poppins-800-font">My Blog</h1>
      <p className="montserrat-400-font">
          Explore my thoughts and experiences in the tech world through these
          articles. Hover over each box and click to read the full article.
        </p>
      <div className="blog-articles">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="blog-container">
              <div className="blog-img-container">
                <img src={article.image} alt="" className="blog-img" />
                <div className="blog-overlay">
                  <h2 className="poppins-600-font blog-title">
                    {article.title}
                  </h2>
                </div>
              </div>
              <p className="montserrat-400-font blog-date">{article.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
