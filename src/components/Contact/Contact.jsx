import React from 'react'
import { useState } from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
   <section className='c-wrapper'>
    <div className='paddings innerWidth flexCenter c-container'>
    {/* left side*/}
    <div className='flexColStart c-left'>
        <span className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy to Contact</span>
        <span className='secondaryText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius 
            eum? Temporibus ducimus quos aspernatur.</span>


        <div className='flexColStart contactModes'>
           {/* first row*/}
        <div className='flexStart row'> 
        <div className='flexColCenter mode'>
          <div className='flexStart'>
            <div className='flexCenter icon'>
            <MdCall size={25} />
            </div>
            <div className='flexColStart detail'>
            <span className='primaryText'>call</span>
            <span className='secondaryText'>021 123 145 14</span>

            </div>
            </div>  
            <div className='flexCenter button'>Call Now</div>   
               
        </div>

{/*second mode*/}
   
    <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                <BsFillChatDotsFill size={25} />
                </div>
                <div className='flexColStart detail'>
                <span className='primaryText'>Chat</span>
                <span className='secondaryText'>021 123 145 14</span>

                </div>
                </div>  
                <div className='flexCenter button'>chat Now</div>   
                
            </div>
            </div>
       
       
       
        {/* second row*/}
        <div className='flexStart row'>
            <div className='flexColCenter mode'>
          <div className='flexStart'>
            <div className='flexCenter icon'>
            <BsFillChatDotsFill size={25} />
            </div>
            <div className='flexColStart detail'>
            <span className='primaryText'>Video Call</span>
            <span className='secondaryText'>021 123 145 14</span>

            </div>
            </div>  
            <div className='flexCenter button'>Video Call Now</div>   
               
        </div>
       
        {/* foruth mode*/}
        <div className='flexColCenter mode'>
          <div className='flexStart'>
            <div className='flexCenter icon'>
            <HiChatBubbleBottomCenter size={25} />
            </div>
            <div className='flexColStart detail'>
            <span className='primaryText'>Message</span>
            <span className='secondaryText'>021 123 145 14</span>

            </div>
            </div>  
            <div className='flexCenter button'>Message  Now</div>   
               
        </div>
          </div>

      

       
        </div>    
    </div>
    {/* right side*/}
    <div className='c-right'>
    <div className='image-container'>
    <img src='./contact.jpg'></img>
    </div>
    </div>

    </div>
   </section>
  )
}

export default Contact
