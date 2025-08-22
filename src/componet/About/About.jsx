import React from 'react'
// import './About.css'
import picture from '../../assets/image-me.jpg'
import { motion } from 'motion/react'

const About = () => {
    return (
        <div id='about'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="px-12 sm:px-24 lg:px-40 text-white my-20 ">
                <h1 className='text-center text-3xl font-mono mb-5'>About Me</h1>
                <div className='border-2 m-auto w-20 border-[#a8684a] mb-15'></div>
                <div className="w-full sm:  md:flex gap-20 justify-between items-start sm:gap-20 ">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: true }}
                        className='sm:border-[#a8684a] md:border-dotted md:border-2 border-0'>
                        <img src={picture} className=' mx-auto my-auto sm:w-[900px] md:w-[1040px] w-70' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                        viewport={{ once: true }}

                        className='text-white'>
                        <h2 className='pb-5 text-4xl font-medium'>Overview.</h2>
                        <p className='text-justify w-full text-[15px] sm:text-[19px]'>I'm a passionate Front-End developer with a strong intrest in building clean, responsive, and user-friendly web applications.
                            I specialize in turning ideas into interactive digital experience using HTML,CSS and JavaScipt,
                            and i'm currently expanding my skills with React.js and modern frameworks to create scalable solution. <br />
                            I enjoy crafting visual appealing interface that not only look good but also provide seamless user experiences.
                            Beyond coding, I'm curious about SEO optimazation, and accessibility, ensuring that the website I build are both discoverable and inclusive. <br />
                            When I'm not coding, I'm usually learning new tools, exploring designs trends or working on projects that challenge me to grow as a developer.
                            My long term goal is to become a well-rounded front-end engineer capable of delivering impactful solutions for businesses and making the technology easier to use.

                        </p>
                    </motion.div>
                </div>


            </motion.div>
        </div>
    )
}

export default About