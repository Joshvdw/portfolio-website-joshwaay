import React from 'react';
import Slideshow from './Slideshow';
import projects from '../projectData';
import { Fade as FadeReveal } from 'react-reveal';
// import { GITHUB_USERNAME } from '../root.link';

const Project = () => {
  return (
    <div id="Projects">
      <section className='my-56 px-5' id='projects'>
      <FadeReveal bottom>
        <header className='text-2xl font-bold pt-10'>
          <h2 className='font-light'>Projects</h2>
          <hr className='mt-5 mb-12 opacity-70'/>
        </header>
        </FadeReveal>
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg pr-4 project-img' : 'w-full md:w-6/12 shadow-lg md:order-1 pl-4 project-img'}>
                <a href={project.link ? project.link : project.behance} target='_blank"' rel='noreferrer' className='px-4'>
                  <Slideshow project={project}/>
                </a>
              </picture>
              <FadeReveal bottom>
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-regular text-lg project-titles'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2 md:flex-wrap'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative pl-1'>
                  {project.behance &&
                  <a href={project.behance} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/behance.svg' alt='link to behance page' width='24px' height='24px' className='behance-icon'/>
                  </a>
                  }
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/github.svg' alt='link to github page' width='24px' height='24px' />
                  </a>
                  {project.link &&
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                  </a>
                  }
                </div>
              </div>
              </FadeReveal>
            </article>
          ))}
        </div>
        
      </section>
      
      {/* <div className='mx-5'>
        <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
        <span>See more on Github</span>
        </a>
      </div> */}
    </div>

  );
};

export default Project;
