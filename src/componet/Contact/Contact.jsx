import React from 'react'
import './Contact.css';
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="contact-headline">
               <h1>My Contact</h1>
               <div className="contact-underline"></div>
               <p>Get in touch</p>  
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm Available to take new project and feel free to message me about what you want me to work on. You can conact me anytime.</p>
                    <div className="social-icons">
                        <div className="fb">
                            <img src={facebook} alt="" />
                            <p>facebook.com</p>
                        </div>
                        <div className="fb">
                            <img src={insta} alt="" />
                            <p>instagram.com</p>
                        </div>
                        <div className="fb">
                            <img src={linkedin} alt="" />
                            <p>linkedin.com</p>
                        </div>
                        <div className="fb">
                            <img src={twitter} alt="" />
                            <p>twitter.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <label htmlFor="">Your Name:</label>
                    <input type="text" placeholder='Enter your name' name='name' required/>
                    <label htmlFor="">Your Email:</label>
                    <input type="email" name="email" placeholder='Enter your email' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button className='contact-submit' type='submit'>Submit</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Contact