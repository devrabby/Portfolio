import React from 'react'

import toast from 'react-hot-toast';
import { motion } from 'motion/react';
import person_icon from '../../assets/person_icon.svg';
import email_icon from '../../assets/email_icon.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import linkedin from '../../assets/linkedin_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "0f39a32a-25a4-4b27-b0c3-945ba7e2ef42");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!!")
                event.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }


    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}

            id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 py-20 text-white '>
            <motion.div
             initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}>
                <h1 className='text-center text-3xl font-mono mb-3 '>Contact Me</h1>
                <div className='border-2 m-auto w-20 border-[#a8684a] mb-8'></div>
            </motion.div>

            <div className='flex flex-col md:flex-row  gap-10 justify-between'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-5'>

                    <h1 className='text-4xl '>Let's talk</h1>
                    <p className='text-[17px]'>I'm currently available to take new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <img src={email_icon} alt="" />
                            <p>abeebrasaq02@gmail.com</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={email_icon} alt="" />
                            <p>+234 (703-126-3212)</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={linkedin} alt="" />
                            <p>abeebrasaq02@gmail.com</p>
                        </div>
                    </div>
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={onSubmit}>
                    <div>
                        <p className='mb-2 text-sm font-medium'>Your name</p>
                        <div className='flex pl-3 rounded-lg border-lg border border-gray-300 dark:border-b-gray-600'>
                            <img src={person_icon} alt="" />
                            <input type="text" placeholder='Enter your name' name='name' className='w-full p-3 text-sm outline-none' required />
                        </div>
                    </div>
                    <div>
                        <p className='mb-2 text-sm font-medium'>Email Id</p>
                        <div className='flex pl-3 rounded-lg border-lg border border-gray-300 dark:border-b-gray-600'>
                            <img src={email_icon} alt="" />
                            <input type="text" placeholder='Enter your email id' name='email' className='w-full p-3 text-sm outline-none' required />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <p className='mb-2 text-sm font-medium'>Message</p>
                        <textarea name="message" className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:boeder-gray-600' placeholder='Enter your massage' required rows={8}></textarea>
                    </div>
                    <button type='submit' className='w-max flex gap-2 bg-[#a8684a] text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>Submit <img src={arrow_icon} alt="" className='w-4' /></button>
                </motion.form>
            </div>

        </motion.div>
    )
}

export default Contact