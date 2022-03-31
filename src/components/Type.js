import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
      options={{
        strings: [
          'Hello. I’m '
        ],
        autoStart: true,
        loop: false,
        pauseFor: 100000000
      }}
    />
  );
}

export default Type;
