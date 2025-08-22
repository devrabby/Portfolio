import React from 'react'

import { motion } from 'motion/react'

const Experience = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="px-12 sm:px-24 lg:px-40 text-white my-20">
                <h1 className='text-center text-3xl font-mono mb-5'>My Work Experience</h1>
                <div className='border-2 m-auto w-20 border-[#a8684a] mb-15'></div>

                <div className="flex-col flex gap-3">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                        className="border-l-5 bg-[#413c3c] border-[#a8684a] px-10 py-5">
                        <h2 className='sm:text-3xl text-2xl py-2'>Front-End Developer (Personal Project)</h2>
                        <p className='italic'>Jan 2024 - Present</p>
                        <ul className='p-3p-3 sm:text-[17px] flex flex-col gap-2 text-[15px]'>
                            <li>Designed and built responsive websites using HTML, CSS, and JavaScript.</li>
                            <li>Developed interactive features such as forms, navigation menus and dynamic content updates.</li>
                            <li>Created a reusable components with React.js to improve scalability and efficiency.</li>
                            <li>Focused on clean UI and smooth user experience across desktop and mobile devices.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        viewport={{ once: true }}
                        className="border-l-5 bg-[#413c3c] border-[#a8684a] px-10 py-5">
                        <h2 className='sm:text-3xl text-2xl py-2'>Web Developer</h2>
                        <p className='italic'>Jan 2023- Present</p>
                        <ul className='p-3 sm:text-[17px] flex flex-col gap-2 text-[15px]'>
                            <li>Developing and maintaining web
                                applications using React.js and other related technologies.</li>
                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        viewport={{ once: true }}
                        className="border-l-5 bg-[#413c3c] border-[#a8684a] px-10 py-5">
                        <h2 className='sm:text-3xl text-2xl py-2'>Web Development Tutor</h2>
                        <p className='italic'>Oct. 2023- Aug. 2024</p>
                        <ul className='p-3 sm:text-[17px] flex flex-col gap-2 text-[15px]'>
                            <li>Web Developer tutor at Agacom InfoTech Concept</li>
                            <li>Creation of websites for the for the institute where student can register to and browse more about the institute.</li>
                            <li>Tutoring Students on Web Development, Microsoft word, and Microsoft Excel.</li>

                        </ul>
                    </motion.div>


                </div>
            </motion.div>

        </div>
    )
}

export default Experience