import React, { useEffect, useRef } from 'react';
import Type from './Type';
import Type2 from './Type2';
import Description from './Description'
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
    <section className='mb-16 mt-16 pr-5 pl-5 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-lg mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-5xl typewriter-header'><Type /><Type2 name={FRONT_PAGE_NAME}/></h1>
        <div className='line'>
          <div className='lineUp'>
            <Description description= {[FRONT_PAGE_DESC, GITHUB_USERNAME, LINKEDIN_USERNAME]}/>
          </div>
        </div>
        {/* <button className='contact-btn'>Contact</button> */}

      </div>
    </section>
  );
};

export default Hero;
