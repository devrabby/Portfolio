import React, { useState } from 'react'
// import './Navbar.css'
import close from '../../assets/close_icon.svg'
import open from '../../assets/menu_icon_dark.svg'
import { easeOut, motion } from 'motion/react'


const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}

      className={`bg-[#a8684a] text-white flex justify-between sticky top-0 backdrop-blur-xl font-medium z-20 px-10 sm:px-12 lg:px-24 xl:px-40 py-4 `}>
      <h1 className='text-[30px]'>RabbyCode</h1>


      <ul className={`flex max-sm:flex-col text-[16px] sm:text-[16px] ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} gap-5 max-sm:fixed top-0 right-0 bottom-0 max-sm:bg-[#a8684a] max-sm:min-h-screen max-sm:h-full sm:items-center max-sm:pt-20 transition-all`}>
        <img src={close} alt="" onClick={() => setSidebarOpen(false)} className='absolute w-5 right-4 top-4 sm:hidden cursor-pointer' />
        <li><a href="#home" className='sm:hover:border-b'>Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <img src={open} onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer' alt="" />

    </motion.div>
  )
}

export default Navbar