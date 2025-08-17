import React from 'react'
import './Experience.css'



const Experience = () => {
    return (
        <div>
            <div className="experience-container">
                <h1>My Work Experience</h1>
                <div className='underline'></div>
                <div className="experiences-list">
                    <div className="experience-1">
                        <h2>Front-End Developer (Personal Project)</h2>
                        <p>Jan 2024 - Present</p>
                        <ul>
                            <li>Designed amd built responsive websites using HTML, CSS, and JavaScript.</li>
                            <li>Developed interactive features such as forms, navigation menus and dynamic content updates.</li>
                            <li>Created a reusable components with React.js to improve scalability and efficiency.</li>
                            <li>Focused on clean UI and smooth user experience across desktop and mobile devices.</li>
                        </ul>
                    </div>
                    <div className="experience-1">
                        <h2>Web Developer</h2>
                        <p>Jan 2023- Present</p>
                        <ul>
                            <li>Developing and maintaining web
                                applications using React.js and other related technologies.</li>
                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                        </ul>   
                    </div>
                    <div className="experience-1">
                        <h2>Web Development Tutor</h2>
                        <p>Oct. 2023- Aug. 2024</p>
                        <ul>
                            <li>Web Developer tutor at Agacom InfoTech Concept</li>
                            <li>Creation of websites for the for the institute where student can register to and browse more about the institute.</li>
                            <li>Tutoring Students on Web Development, Microsoft word, and Microsoft Excel.</li>
                            
                        </ul>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Experience