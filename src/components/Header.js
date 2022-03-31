import React from 'react';
import { RESUME_PATH } from '../root.link';

const Header = () => {
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }

  // /* Set the width of the side navigation to 0 */
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // } 
  // function closeNav (e) {
  //   e.preventDefault()
  //   console.log('Button Worked');
  // }
  
  return (
    <>
    <nav className='space-x-10' id='Header'>
      <ul className='flex flex-row space-x-2 md:space-x-2 justify-end md:justify-end font-thin nav'>
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
    {/* <nav className='space-x-10' id='Header'> */}
    {/* <span onclick={openNav()}>open</span> */}
    {/* <div id="mySidenav" className="sidenav"> */}
      {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
      {/* <button onClick={closeNav} className="closebtn">hello</button>
      <a href='#Header' onClick={closeNav} className="">hello</a>
      <a href="#Projects">Projects</a>
      <a href="#Skills">Skills</a>
      <a href="#Contact">Contact</a>
      <a href="#Resume">Resume</a>
    </div>

    </nav> */}
    </>
  );
};

export default Header;
