import React from 'react';
import { RESUME_PATH } from '../root.link';
import './style.ex.css'

const Header = () => {
  
  return (
    <>
    <nav className='space-x-10' id='Header'>
      <ul className='flex flex-row space-x-2 md:space-x-4 justify-end md:justify-end font-thin nav'>
        <li>
          <a href='#Projects' className=' rounded-lg nav-link nav-projects'>
            Projects
          </a>
        </li>
        <li>
          <a href='#Skill' className='rounded-lg nav-link nav-skills'>
            Skills
          </a>
        </li>
        <li>
          <a href='#Contact' className='rounded-lg nav-link nav-contact'>
            Contact
          </a>
        </li>
        <li>
          <a href={RESUME_PATH} target='_blank' rel='noreferrer' className='resume-btn'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Header;
