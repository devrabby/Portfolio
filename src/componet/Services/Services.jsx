import React from 'react'
// import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="text-white">
                <h1 className='text-center text-3xl font-mono mb-5'>My Services</h1>
                <div className='border-2 m-auto w-20 border-[#a8684a] mb-15'></div>
                <div className="p-3 flex-col sm:gap-5  sm:flex items-center justify-center gap-7">
                    <div className="border-2 border-[#a8684a] px-10 py-[20px] rounded-[20px] hover:scale-[1.2] transition-all">
                        <h2>Web Developer</h2>
                    </div>
                    <div className="border-2 border-[#a8684a] px-10 py-[20px] rounded-[20px] hover:scale-[1.2] transition-all">
                        <h2>UI/UX Designer</h2>
                    </div>
                    <div className="border-2 border-[#a8684a] px-10 py-[20px] rounded-[20px] hover:scale-[1.2] transiton-all">
                        <h2>React Developer</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services