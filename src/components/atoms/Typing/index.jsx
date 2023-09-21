import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({ strings, typeSpeed, backSpeed, startDelay, backDelay, loop }) => {
  useEffect(() => {
    // Configure Typed.js options
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      startDelay,
      backDelay,
      loop,
    };

    // Create a Typed.js instance
    const typed = new Typed('.typing-animation', options);

    // Clean up Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, startDelay, backDelay, loop]);

  return (
    <span className="typing-animation"></span>
  );
};

export default TypingAnimation;
