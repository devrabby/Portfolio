import React from 'react'

import './Hero.css'
import picture from '../../assets/image-me.jpg'
import insta from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'

const Hero = () => {
  return (
    <div>
      <div className="container-hero">
        <div className="menu-hero">
          <div className='note-1'>FRONT-END WEB DEVELOPER...</div>
          <div className='note-2'>RASAQ ABEEB SHINA</div>
          <p className='note-3'>A Passionate Web Developer with 5 years of experience</p>
          <div className="downpart-menu">
            <div className="btn-cv">
              <button>Download CV</button>  
            </div>
            <div className="images-social">
              {/* <input type="color" name="" id="" /> */}
              <img src={insta} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          
        </div>
        <div className="profile-image">
          <img src={picture}/>
        </div>
      </div>
      
    </div>
  )
}

export default Hero