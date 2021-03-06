import React from 'react';
import { ADDRESS, EMAIL_ID, PHONE, FIRST_NAME, GITHUB_USERNAME, LAST_NAME, LINKEDIN_USERNAME } from '../root.link'
const Contact = () => {
  return (
    <section className='mb-32 mt-56 flex flex-wrap md:justify-between md:items-center' id='Contact'>
      <div className='w-full md:w-6/12'>
        <img src='./images/bio-pic.jpg' alt='Josh Waay Profile Pic' className='rounded-full w-6/12 h-4/5 opacity-90 m-auto mt-14 border-2'></img>
      </div>
      <div className='w-full md:w-6/12'>
        <header className='px-5 text-2xl font-bold pt-10'>
          <h2 className='font-light'>Contact</h2>
          <hr className='mt-2 mb-8 opacity-70'/>
          <p className='text-base font-thin'>Please feel free to reach out to me or connect via one of my socials, I would love to hear from you!</p>
        </header>
        <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
          <div className='md:px-0 p-5 my-5'>
            <div>
              <p className='font-semibold'>{FIRST_NAME} {LAST_NAME}</p>
              <p className='font-thin'>{ADDRESS}</p>
              <a href={`mailto: ${EMAIL_ID}`} className='mb-2 mt-3 inline-block border-gray-500 glow'>
                {EMAIL_ID}
              </a>
              <p className='font-thin'>{PHONE}</p>
            </div>

            <div className='flex flex-row flex-wrap mt-7'>
              <div className=''>
                <a href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`} target='_blank' rel='noreferrer'>
                  <span className='mb-2 flex flex-row items-end pr-2 text-sm'>
                    <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1 enlarge-icon' />
                  </span>
                </a>
              </div>

              <div className=''>
                <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
                  <span className='mb-2 flex flex-row items-end pl-2 text-sm'>
                    <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1 enlarge-icon' />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        </div>
    </div>
    </section>
  );
};

export default Contact;
