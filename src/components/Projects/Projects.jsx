import React from 'react'
import chashly from '../../assets/images/cashly.jpg';
import echose from '../../assets/images/echos.jpg';
import mariam from '../../assets/images/mariam.jpg';
import yoga from '../../assets/images/yoga.jpg';


export default function Projects() {

const projects = [
  {
    id: 12,
    imgSrc: chashly,
    title: 'CA$HLY',
    description:
      '"A simple and secure app for fast money transfers.".',
    caseStudy: "https://www.behance.net/gallery/235443095/Cashly-%28Money-Transfer%29",
    prototype: "https://embed.figma.com/proto/dy2qNHybqq2EvBaTg1Aood/Cashly?node-id=76-1661&starting-point-node-id=68%3A3031&embed-host=share",
  },
  {
    id: 13,
    imgSrc: mariam,
    title: 'Mariam portfolio',
    description:
      'Frontend Developer  portfolio.',
    caseStudy: ' https://mariam-hesham-portfolio.vercel.app/',
    prototype: ' https://mariam-hesham-portfolio.vercel.app/',
  },
  {
    id: 14,
    imgSrc: yoga,
    title: 'World Of Yoga',
    description:
      'Yoga landing page – clean and responsive design.',
    caseStudy: 'https://www.behance.net/gallery/235313857/landing-page',
    prototype: 'https://www.behance.net/gallery/235313857/landing-page',
  },
    {
    id: 11,
    imgSrc: echose,
    title: 'Echoes of History',
    description:
      'A mobile app that helps visitors discover historical artifacts by searching or scanning a statue to instantly watch a short storytelling video, with suggestions for similar pieces.while Admins manage news and content in the app and still have full access to the user features.',
    caseStudy: 'https://www.behance.net/gallery/239711471/Echoes-of-History',
    prototype: "https://embed.figma.com/proto/LwtOpFrAG5lUErdYIpBgC2/Echoes-of-History?node-id=24-3403&starting-point-node-id=24%3A3380&embed-host=share",
  },
]

  return (
    <section className='relative flex flex-wrap justify-center p-12'>
      <h1 className='w-full pb-8 font-bold text-center secondTitle text-primary'>Projects</h1>

      <div className="relative flex flex-wrap justify-center w-full cards">
          {projects.map((project) => (
            <div className="w-full p-5 sm:w-1/2 lg:w-1/3">
              <div key={project.id} className="shadow-md item bg-background rounded-xl">
                <img src={project.imgSrc} alt={project.title} className='w-full rounded-t-xl' />
                <div className="p-6">
                  <h2 className='text-primary font-semibold text-[20px] md:text-[24px] text-center'>
                    {project.title}
                  </h2>
                  <p className='text-secondary text-[14px] md:text-[16px] text-center py-2'>{project.description}</p>
                  
                  <div className="flex justify-center gap-6 pt-3">
                    <a href={project.gitHubUrl} target='_blank' className="transition-all duration-300 text-secondary hover:scale-125">
                      <i className="fa-brands fa-square-behance text-[22px] text-primary"></i> View Case Study
                    </a>
                    <a href={project.liveDemo} target='_blank' className="transition-all duration-300 text-secondary hover:scale-125">
                      <i className="fa-regular fa-circle-play text-[22px] text-primary"></i> Try Prototype
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

      </div>

      <div className='flex justify-center w-full'>
        <a href='https://www.behance.net/dohataher2' target='_blank' className='text-white capitalize btn bg-primary'>
          View All Projects
        </a>
      </div>
    </section>
  );
}
