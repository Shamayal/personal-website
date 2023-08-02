import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <div>
      <h1>Your Name</h1>
      <Typewriter
        options={{
          strings: ['Full-Stack Web Developer', 'Coding Instructor', 'Blogger', 'Content Creator', 'Life-Long Learner'],
          autoStart: true,
          loop: true,
          delay: 50,           // Adjust the delay between each character (in milliseconds)
          deleteSpeed: 40,     // Adjust the speed of characters being deleted (in milliseconds)
          pauseFor: 2000,      // Adjust the pause time before starting the next string (in milliseconds)
          cursor: '|',         // Change the cursor character (set to false to hide the cursor)
          wrapperClassName: 'typewriter-wrapper', // Add a CSS class to the wrapper element
          cursorClassName: 'typewriter-cursor',   // Add a CSS class to the cursor element
        }}
      />
    </div>
  );
};

export default TypewriterComponent;