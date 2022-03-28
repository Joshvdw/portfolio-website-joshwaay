import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME, GITHUB_USERNAME, LINKEDIN_USERNAME } from '../root.link';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 pr-5 pl-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m {FRONT_PAGE_NAME}</h1>
        <p className='tracking-wide leading-relaxed'>
          {FRONT_PAGE_DESC}{' '}
        </p>
        {/* <button className='contact-btn'>Contact</button> */}
        <div className='flex flex-row flex-wrap mt-7'>
          <div className='mr-4'>
            <a href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end text-sm'>
                <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
              </span>
            </a>
          </div>

          <div className='mr-4'>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end text-sm'>
                <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />

              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
