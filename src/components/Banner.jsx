import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id="Home" class="styles__SectionContainer-sc-yy0e7n-0 eYklgx">
                <div class="styles__HeroBody-sc-yy0e7n-1 fYtLPz">
                    <div class="styles__HeroTitle-sc-yy0e7n-2 gaiPSa">
                        <div class="styles__HeroInside-sc-yy0e7n-3 cmvSbJ">

                            <img src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201272/HackNitr/Hero%20Section/anjnbvyn94vxvpf8acbc.png" alt="NITR" class="styles__NITRimg-sc-yy0e7n-6 cxQFBD" />
                            <img src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201459/HackNitr/Hero%20Section/kgjxmevu0bvj4yn7ojfy.gif" alt="Hack" class="styles__HACKimg-sc-yy0e7n-5 dkXXye" />
                        </div>
                        <div class="styles__HeroHeadingBase-sc-yy0e7n-7 hylGCD">
                            <img src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201281/HackNitr/Hero%20Section/b1iuqxt1meh81y8bxwbd.png" class="styles__FIVEimg-sc-yy0e7n-8 dQGese" />
                        </div>
                        <div class="styles__ContentBlock-sc-yy0e7n-4 bKyMMx">
                            <p class="Body1-sc-ks60nt-0 styles__TaglineText-sc-yy0e7n-10 iECUcM hUWqdA">Hop on the bandwagon, and join one of India’s largest Student-run hackathons. HackNITR is back with version 5.0, which is now fully offline!</p>
                        </div>
                        {/* <button class="styles__Button-sc-yy0e7n-11 iLIwRJ btn "><div>
                                        <button type="button">
                                            <a href="" target="__blank" rel="noreferrer">PRE-REGISTER</a>
                                            </button>
                                            </div>
                                            </button> */}



                        <button class="btn" type="button">
                            <strong>REGISTER NOW</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow2">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
