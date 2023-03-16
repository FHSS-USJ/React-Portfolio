import React, { useState } from "react"
import "./Contact.css"
import {FaFacebook}  from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr"
import {SiGmail} from "react-icons/si";
import {FaGithubSquare} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
               
                </div>
                <div className='details'>
                  <p><h4>Address:</h4><p>Amaragiriwaththa, <br />
                   Kandangamuwa, <br />
                   Loluwagoda.</p>
                  </p>

                  <p><h4>Phone: </h4>+94713061172</p>
                  <p><h4>Email:</h4> adikawmini21@gmail.com.com</p> <br />
                  
                  <div className='hero_btn d_flex'>
              <div className='col_1'>
    
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
            </div>
          </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Contact