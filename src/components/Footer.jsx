import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-links">
          <ul className="links montserrat-400-font">
            <li><h5>Home</h5></li> 
            <li>Home</li>
            <li>About Me</li>
            <li>My Resume</li>
            <li>My Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>

        <div className="footer-copyright montserrat-400-font">
          <p>Personal Website Developed and Designed by Shamayal Syed © 2023</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
