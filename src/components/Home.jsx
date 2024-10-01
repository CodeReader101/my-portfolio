import React from 'react'
import svgIcons from '../assets/svg/svgIcons'

const Home = () => {

  
  return (
    <main className=' grid grid-cols-1 lg:grid-cols-2 p-10'>
      <section className='text-7xl text-white font-thin grid place-content-center'>
        <div className='leading-normal'>
          <h1>Hi, my</h1>
          <h1>name is <span className='font-bold text-[#e9322e]'>Shahbaj</span><span>.</span></h1>
          
        </div>  

      </section>
      <section className='grid place-items-center'>
        <div>
          <img src={svgIcons.robotSvg} className='h-[30rem]' alt="robot" />
        </div>
      </section>
    </main>

  )
}

export default Home
