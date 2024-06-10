import React from 'react';
import './hero.css';


const Hero = () => {
  return (
    <section className="hero section" id='hero'>
      <div className="hero_container container grid">
        <div className="hero_card">
          <div className="hero_card-image">
            <div className="hero_card-overlay">
              <div className='hero_overlay-maintxt'>Order your <br/> favourite food here</div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae maxime corrupti expedita nostrum! Nemo id sit vero nisi vel dolo.</p>
              <a className='hero_overlay-btn button' href='#menu'>View Menu</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero