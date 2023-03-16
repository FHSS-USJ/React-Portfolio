import React, { useState } from "react"
import "./Header.css"

const Header = () => {
    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

    return(
        <>
        <header className = 'header'>
                <div className = "container d-fle">

                <div className ="navlink">

                {/* <ul className = 'link f_flex uppercase'> */}
                
                <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                        
                       
                            <li>< a herf = "#home">home</a></li>
                            <li>< a herf = "#about">about</a></li>
                            <li>< a herf = "#projects">projects</a></li>
                            <li>< a herf = "#contacts">contacts</a></li>
                        </ul>
        
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                </div>

         </div>    
    </header>
 </>
    )
}

export default Header