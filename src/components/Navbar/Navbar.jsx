import React, { useState } from 'react'
import { Link } from 'react-scroll'
import style from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  const sections = ["home", "about", "education", "skills", "projects", "contact"];

  return <>
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 border-gray-200 bg-primary">
      <div className="flex flex-wrap items-center justify-center max-w-screen-xl py-3 lg:justify-between">

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-2 font-medium me-auto md:p-0 md:flex-row md:space-x-8">
            {sections.map((section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  onClick={handleCloseMenu}
                  className="block px-3 py-2 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background"
                >
                  {section === "home" ? "Home" : section}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto pt-2 lg:pt-0`} id="navbar-default">
          <ul className="flex flex-row flex-wrap items-center gap-4 p-4 font-medium text-white pe-0 md:p-0 md:gap-0 md:space-x-8 rtl:space-x-reverse">

            <li>
              <a href="https://wa.me/201066135369" target='_blank' className="block capitalize rounded-sm md:border- md:p-0">
                <i className="fa-brands fa-whatsapp text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/dohataher2" target='_blank' className="block capitalize rounded-sm md:border-0 md:p-0">
                <i className="fa-brands fa-behance text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=doha321taher@gmail.com" target="_blank" rel="noreferrer" className="block capitalize rounded-sm md:border-0 md:p-0">
                <i className="fa-regular fa-envelope text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/doha-taher-5a9b3231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="block capitalize rounded-sm md:border-0 md:p-0">
                <i className="fa-brands fa-square-linkedin text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Doha-2" target='_blank' className="block capitalize rounded-sm md:border-0 md:p-0">
                <i className="fa-brands fa-github text-[18px]"></i>
              </a>
            </li>
            <li>
              <button className='btn text-primary bg-background'>
                <a href='https://drive.google.com/drive/folders/1VMHPGLFBTnClicS04nPxwlTSk2Ioy-za?usp=sharing' target='_blank'>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i> View Behance
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}


