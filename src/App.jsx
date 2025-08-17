import React, { useEffect, useState } from 'react'
import Navbar from './componet/Navbar/Navbar'
import Hero from './componet/Hero/Hero'
import About from './componet/About/About'
import Experience from './componet/Experience/Experience'
import Project from './componet/Project/Project'

const  App = () => {
  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme? current_theme: 'light');

  useEffect(() =>{
    localStorage.setItem('current_theme',theme)
  },[theme])
  return (
    <div className='w-full'>
       <Navbar theme = {theme} setTheme={setTheme}/>
       <Hero />
       <About />
       <Experience />
       <Project />
    </div>
  )
}

export default  App