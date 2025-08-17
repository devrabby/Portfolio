import React from 'react'
import './Services.css'
import web from '../../assets/web-dev.png'
import Ui from '../../assets/uiux.png'
import graphics from '../../assets/Graphics.png'



const Services = () => {
  return (
    <div>
        <div className="services">
            <h1>My Services</h1>
            <div className="service-underline"></div>
            <div className="services-card">
                <div className="service-card-notes">
                    <div className="service-img">
                        <img src={web} alt="" />
                    </div>
                    <h2>Web Developer</h2>
                </div>
                <div className="service-card-notes">
                    <div className="service-img">
                        <img src={Ui} alt="" />
                    </div>
                    <h2>UI/UX Designer</h2>
                </div>
                <div className="service-card-notes">
                    <div className="service-img">
                        <img src={graphics} alt="" />
                    </div>
                    <h2>Graphics Designer</h2>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services