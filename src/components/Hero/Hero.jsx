import React from 'react'
import { useState } from 'react'
import "./Hero.css"
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'
import {motion} from 'framer-motion'
function Hero() {
  return (
   <section className='hero-wrapper'>
    <div className='paddings innerWidth flexCenter hero-container '>
    


    <div className='flexColStart hero-left'>
    <div className='hero-title'>
      <div className='orange-circle' />
      <motion.h1
      initial={{y:"2rem",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2,
      type:"spring"}}
      
      >Discover
         <br />
         Most Suitable <br/>
          Property
      </motion.h1>
      </div>
      <div className='flexColStart hero-des'>
    <span className='secondaryText'>Find a vareity of properties that suit you very easily </span>
    <span className='secondaryText'>forget all difficulties in finding a residence for you </span>
      </div>
    <div className='search-bar'>
    <HiLocationMarker color="var(--blue)" size={25}   />
    <input type='text' />
    <button className='button  mbut'>Search</button>
    </div>

<div className='inline'>

    <div className='flexColCenter stats'>
    <div className='flexColCenter stat'>
      <span>
        <CountUp start={8800} end={9000} duration={6}/>
        <span>+</span>
      </span>
      <span className='secondaryText'>Premiun Products</span>
    </div>
    </div>
    <div className='flexColCenter stats'>
    <div className='flexColCenter stat'>
      <span>
        <CountUp start={1950} end={2000} duration={6}/>
        <span>+</span>
      </span>
      <span className='secondaryText'>Happy Cutomers</span>
    </div>
    </div>
   
    <div className='flexColCenter stats'>
    <div className='flexColCenter stat'>
      <span>
        <CountUp  end={60}/>
        <span>+</span>
      </span>
      <span className='secondaryText'>Award Winning</span>
    </div>
 </div>
 </div>

 </div>

{/* right side */}
    <div className='flexCenter hero-right'>
      <motion.div
      initial={{x:"7rem",opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type:"spring"
      }}
     className='image-container'>
    <img src='./hero-image.png' alt="left" />
    </motion.div>
      </div>
    </div>
   
  </section>
  )
}

export default Hero








{/* <div className='flexColStart hero-left'>
    <div className='hero-title'>
      <div className='orange-circle' />
      <h1>Discover <br />Most Suitable <br/> Property</h1>
      </div>
      <div className='flexColStart hero-des'>
    <span>Find a vareity of properties that suit you very easily </span>
    <span>forget all difficulties in finding a residence for you </span>
      </div>
    <div className='search-bar'>
    search bar
    </div>
      </div>
     

    <div className='flexCenter hero-right'>
      <div className='image-container'>
    <img src='./hero-image.png' alt="left" />
      </div>
    </div> */}