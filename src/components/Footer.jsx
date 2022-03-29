import React from 'react'

const Footer = () => {
  return (
    <footer className='w-66 mx-auto'>
      <a href="#Header">
        <img src="./images/rocket.gif" alt="Rocket Footer Gif"  className='w-28 mx-auto mb-4 rocket-gif'/>
      </a>
      <p className='text-xs mb-3 opacity-90 italic text-center'>Built with React & deployed with Vercel</p>
      <p className='text-xs mb-8 opacity-90 text-center'>Josh Waay 2022 ©</p>
    </footer>

  )
}

export default Footer;
