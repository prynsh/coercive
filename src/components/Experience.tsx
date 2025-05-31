import React from 'react'
import TopBar from './TopBar'
import ReusableButton from './ResuableButton'
import Footer from './Footer'

const Experience = () => {
  return (
    <div>

    <div className='bg-[#f2fdcc] min-h-screen'>
        <div className='p-3'>
        <TopBar/>
        <div className='text-center flex-col items-center pt-20 '>
            <h1 className='text-8xl raleway-font'>IT MAY NOT BE</h1>
            <h1 className='text-8xl  larken-font-italic'>What You Think</h1>
            <p className='pt-10 text-lg raleway-font-thin '>APPEARANCES CAN BE DECEPTIVE. UNCOVER <br/> THE SUBTLE FACE OF CONJUGAL VIOLENCE <br/> THROUGH THE LENS OF COERCIVE CONTROL.</p>
            <ReusableButton text='Begin the  experience' className='mt-10  raleway-font '/>
        </div>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Experience
