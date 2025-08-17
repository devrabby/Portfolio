import React from 'react'
import './Navbar.css'
import moon from '../../assets/moon.png'
import light from '../../assets/light.png'


const Navbar = ({theme, setTheme}) => {
  const changeMode = ()=> {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className={`container ${theme}`}>
      <h1>RabbyCode</h1>
      <ul className='navbar'>
        <li><a href="#" target="_blank">Home</a></li>
        <li><a href="#" target="_blank">About Us</a></li>
        <li><a href="#" target="_blank">Project</a></li>
        <li><a href="#" target="_blank">Contact</a></li>
       
      </ul>
      <img src={theme == 'light' ? moon : light}  className='logo' onClick={() =>{changeMode()}}/>
    </div>
  )
}

export default Navbar