import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-2 grid grid-cols-2 lg:grid-cols-2'>
            <div>
                <h3 className='font-bold text-xl border-b-4 inline-block mt-4 text-orange-500'>Tasty Eats</h3>
                <h4 className='text-gray-500'>At (RN), we’re serving up more than (TF). In fact, (RN) Famous (recipe) is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high.</h4>
            </div>
            <div>
                <h3 className='font-bold text-xl  text-orange-500 border-b-4  inline-block mt-4'>Services</h3>
                <ul className='text-gray-500'>
                    <li>Orders</li>
                    <li>Wallet</li>
                    <li>Help</li>
                    <li>Invite Friends</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer