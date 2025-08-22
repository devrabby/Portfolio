import React from 'react'

// import './Hero.css'
import picture from '../../assets/image-me.jpg'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div id='home'>
      <div className="w-full flex items-center justify-between overflow-hidden sm:items-center h-[80vh] px-12 sm:px-24 lg:px-40">
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className='text-white sm:text-3xl text-[25px]'>FRONT-END WEB DEVELOPER...</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }} 
          className='sm:text-6xl text-[50px] pb-1.5 text-[#a86845] font-medium'>RASAQ ABEEB SHINA</motion.div>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            viewport={{ once: true }} 
          className='text-white text-xl pb-5'>A Passionate Web Developer with 5 years of experience</motion.p>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }} 
          className="flex justify-between ">
            <div className="">
              <button className='px-2 py-2.5 bg-transparent text-[#a86845] border-[#a86845] border-2 rounded-xl cursor-pointer'>Download CV</button>
            </div>
          </motion.div>

        </div>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }} 
        className="hidden md:block w-[450px]">
          <img src={picture} />
        </motion.div>
      </div>

    </div>
  )
}

export default Hero