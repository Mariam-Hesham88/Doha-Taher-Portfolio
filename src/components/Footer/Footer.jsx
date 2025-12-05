import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  <section className='py-5 text-center text-white bg-primary'>
    <h3 className={style.font}>Designed By: Doha Taher</h3>
    <h4 className={style.font}>Developed By: <a href="https://www.linkedin.com/in/mariam-hesham-88m/" className='underline' target='_blank'> Mariam Hesham </a></h4>
  </section>
  </>
}
