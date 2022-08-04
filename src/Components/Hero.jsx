import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 rounded-3xl'>
       <div className='max-h-[500px] relative'>
          {/*Overlays*/}
          <div className='absolute rounded-3xl w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods<span className='text-orange-500'>Delivered</span></h1>
          </div>
          <img className='w-full max-h-[500px] object-cover rounded-3xl' src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
       </div>
    </div>
  )
}

export default Hero