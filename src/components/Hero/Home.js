import React from "react"
import "./Home.css"
import {FaFacebook}  from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr"
import {SiGmail} from "react-icons/si";
import {FaGithubSquare} from "react-icons/fa";

import adi from "../Hero/pic/adi.jpg"
//import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
           
            <h2>
              Hi, I’m Adithya Rathnayaka
            </h2>
            {/* <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2> */}

            <h3>An IT Undergraduate</h3>

            <p>A person with a creative mindset while accepting any challange that I have to face in my life. Moreover, I am a person who loves to enjoy every moment in my life.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME</h4>
               
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href ="https://www.linkedin.com/in/adithya-rathnayaka/">
                  <GrLinkedinOption/>
                  </a>
                  </button>
                  

                  <button className='btn_shadow'>
                    <a href=" https://www.facebook.com/profile.php?id=100073534863746">
                  <FaFacebook/>
                  </a>
                  </button>

                  <button className='btn_shadow'>
                  <a href ="mailto:adikawmini@gmail.com">
                  <SiGmail/>
                  </a>
                  </button>

                  
                  <button className='btn_shadow'>
                  <a href ="https://github.com/AdithyaRathnayka">
                  <FaGithubSquare/>
                  </a>
                  </button>
                </div>
              </div>
            
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src = {adi} alt = ""/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home