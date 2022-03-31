import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Type(props) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    show ? 
    <Typewriter
      options={{
        strings: [
          `${props.name}`,
          "a frontend web developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        pauseFor: 2000
      }}
    />
    : <></>
  );
}

export default Type;
