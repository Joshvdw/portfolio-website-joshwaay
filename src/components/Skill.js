import React from 'react';

import { Proficient } from '../SkillData'
const Skill = () => {
  return (
    <div id="Skill">
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10 mb-5 pb-3'>
        <h2 className='font-light'>Skills & Tools</h2>
        <hr className='my-5 opacity-70'/>
      </header>
      {Proficient?.length > 0 &&
        <div className=''>
          <div className='my-7 grid gap-6 grid-cols-3 md:grid-cols-6 content-center'>
            {Proficient.map((x, index) =>
                <div className='flex flex-col items-center enlarge-icon' tabIndex='0' role='img' aria-label={x.skill} key={index}>
                  <img src={x.logo} alt={x.skill} loading='lazy' className='w-16 mb-2' width='64px' height='64px' />
                  {x.skill}
                </div>
            )}
          </div>
        </div>
      }
      <br/>
      <hr className='mt-6 mb-12 opacity-70'/>
      </section>
    </div>
  );
};

export default Skill;
