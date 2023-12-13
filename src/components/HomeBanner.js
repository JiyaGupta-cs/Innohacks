import React from 'react'
import './HomeBanner.css'
import inno from '../Assets/innohack.png'

const HomeBanner = () => {
  return (
    <div className='HomeBanner'>
        <div className="banner-innohack5">
<div className="innohack">
<img className='inno' src={inno} alt="" />
<img className='hack' src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201459/HackNitr/Hero%20Section/kgjxmevu0bvj4yn7ojfy.gif" alt="" />
</div>
<div className="_5">
<img  className="_5-img" src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201281/HackNitr/Hero%20Section/b1iuqxt1meh81y8bxwbd.png" alt="" />
</div>
        </div>
      <div className="banner-text">
        <p>Hop on the bandwagon, and join one of India’s largest Student-run hackathons. InnoHacks is back with version 3.0 !</p>
      </div>
      <div className="banner-btn">
      <button class="btn" type="button">
  <strong>REGISTER</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>

      </div>
    </div>
  )
}

export default HomeBanner
