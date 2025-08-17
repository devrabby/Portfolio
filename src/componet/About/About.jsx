import React from 'react'
import './About.css'
import picture from '../../assets/image-me.jpg'
const About = () => {
    return (
        <div>
            <div className="container-about">
                <h1>About Me</h1>
                <div className='border-under'></div>
                <div className="about-content">
                    <div className='about-right'>
                        <img src={picture} width="280px" />
                    </div>
                    <div className='about-left'>
                        <h2>Overview.</h2>
                        <p>I'm a passionate Front-End developer with a strong intrest in building clean, responsive, and user-friendly web applications.
                            I specialize in turning ideas into interactive digital experience using HTML,CSS and JavaScipt, 
                            and i'm currently expanding my skills with React.js and modern frameworks to create scalable solution. <br />
                            I enjoy crafting visual appealing interface that not only look good but also provide seamless user experiences.
                            Beyond coding, I'm curious about SEO optimazation, and accessibility, ensuring that the website I build are both discoverable and inclusive. <br />
                            When I'm not coding, I'm usually learning new tools, exploring designs trends or working on projects that challenge me to graow as a developer.
                            My long term goal is to become a well-rounded front-end engineer capable of delivering impactful solutions for businesses and making the technology easier to use.

                        </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default About