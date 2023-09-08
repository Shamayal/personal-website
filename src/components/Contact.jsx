// import "../../../styles/income.css"

import Email from "../media/Email.png"

const Contact = () => {
  return (
    <div>
      <p className="poppins-400-font">GET IN TOUCH</p>
      <h1 className="poppins-800-font">Contact Me</h1>

      <div>
        <form>
          <input />
          <label>Name: </label>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>blah blah contact me</p>
        <p>
        <img src={Email} alt="Email" height="35px"/>: shamayal.syed@outlook.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
