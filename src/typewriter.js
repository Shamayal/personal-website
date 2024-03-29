import React from "react";
import Typewriter from "typewriter-effect";
import "./styles/fonts.css"

const TypewriterComponent = () => {
  return (
    <h2 className="poppins-400-font">
      <Typewriter
        options={{
          strings: [
            "Junior Developer",
            "Blogger",
            "Baker",
            "Amateur Photographer",
            "Life-Long Learner"
          ],
          autoStart: true,
          loop: true,
          delay: 50, // Adjust the delay between each character (in milliseconds)
          deleteSpeed: 60, // Adjust the speed of characters being deleted (in milliseconds)
          pauseFor: 2000, // Adjust the pause time before starting the next string (in milliseconds)
          cursor: "|", // Change the cursor character (set to false to hide the cursor)
          wrapperClassName: "typewriter-wrapper", // Add a CSS class to the wrapper element
          cursorClassName: "typewriter-cursor", // Add a CSS class to the cursor element
        }}
      />
    </h2>
  );
};

export default TypewriterComponent;
