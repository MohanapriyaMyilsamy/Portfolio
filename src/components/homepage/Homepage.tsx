import React from 'react'
import { About } from '../about/About'
import { Navbar } from '../navbar/Navbar'
import { Experience } from '../experience/Experience'
import { Projects } from '../projects/Projects'
import { Myself } from '../myself/Myself'
import { Contact } from '../contact/Contact'


const Homepage = () => {
  return (
    <>
      <Navbar />
      <Myself/>
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </>
  )
}

export default Homepage
