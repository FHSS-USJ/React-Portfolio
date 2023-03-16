import React from "react"
import "./Portfolio.css"


const Portfolio = () => {
  return (
    <>
        <section className='potrfolio' id='portfolio'>
        <div className='container f_flex top'>
          <div className='left top'>

            <h1>My Projects</h1>
            <div className='portfolio_btn d_flex'>
              <div className='col_1'>
                <div className='button'>
                  <button className='btn_shadow'>
                  <h4>ATM System</h4>
                  </button>
                  <button className='btn_shadow'>
                  <h4>Mobile App with Voting Caoabilities</h4>
                  </button>
                  <button className='btn_shadow'>
                  <h4>Web Site for An English Acedamy</h4>
                  </button>
                  <button className='btn_shadow'>
                  <h4>Number Guessing Game</h4>
                  </button>
                </div>
              </div>
            
            </div>
          </div>
        
        </div>
      </section>
    </>
  )
}

export default Portfolio