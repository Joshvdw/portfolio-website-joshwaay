import React, { useState, useEffect } from "react";

function Type(props) {

  const [show, setShow] = useState(false);

  const [description, github, linkedin] = props.description

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    show ? 
      <>
      <p className='tracking-wide leading-relaxed font-thin'>{description}</p>
        <div className='flex flex-row flex-wrap mt-7'>
          <div className='mr-4'>
            <a href={`https://www.linkedin.com/in/${linkedin}`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end text-sm'>
                <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
              </span>
            </a>
          </div>

          <div className='mr-4'>
            <a href={`https://github.com/${github}`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end text-sm'>
                <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />

              </span>
            </a>
          </div>
        </div>
      </>
    : <></>
  );
}

export default Type;
