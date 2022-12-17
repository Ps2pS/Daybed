import React from 'react'
import Button from '@mui/material/Button';
import "./Navbar.css"
import brandImg from "../../assets/images/brand.png"
import arrow from "../../assets/images/icon/forward-arrow.png"
import facebook from "../../assets/images/icon/facebook.png"
import twitter from "../../assets/images/icon/twitter.png"
import insta from "../../assets/images/icon/instagram.png"

const Brand = 'Daybed';
const MenuItem = ['Search Homes', 'Property Owners', 'How it works'];

function Footer() {
  return (
    <div className='footer'>

      <div className='container d-flex flex-wrap align-items-center justify-content-between'>
        <div className=" col-lg-6 ">
          <div className='nav-brand'>
            <img src={brandImg} alt="brandimg" />
            <span className='brand-name-light'> {Brand}</span>
          </div>
        </div>
        <div className=' col-lg-6 '>
          <div className='d-flex brand-lft-part'>
            <h2>Ready to get started?</h2>
            <Button variant="contained" className='search-btn-footer'>
              Search Homes
            </Button>
          </div>
        </div>
        <div className='border-btm'></div>
      </div>


      <div className='container d-flex flex-wrap justify-content-between'>

        <div className='footer-sec'>
          <h2 className='newsletter-text'>Subscribe to our
            newsletter</h2>
          <div className='footer-search-bar'>
            <input type="text" className="form-control" placeholder="Email address" />
            <Button variant="contained" className='arrow-btn-footer'>
              <img src={arrow} className="footer-arrow-img" />
            </Button>
          </div>
        </div>
        <div className='footer-sec2'>
        <div className='footer-links '>
          <h3 className='color-white'>Partnerships</h3>
          <p><a href='#' className='color-white'>Property Owners</a></p>
          <p><a href='#' className='color-white'>Corporate</a></p>
        </div>


        <div className='footer-links '>
          <h3 className='color-white'>Company</h3>
          <p className='color-white'><a href='#' className='color-white'>About </a></p>
          <p className='color-white'><a href='#' className='color-white'>How it works</a></p>
          <p className='color-white'><a href='#' className='color-white'>Refer a Friend</a></p>
          <p className='color-white'><a href='#' className='color-white'>Careers</a></p>
        </div>
        <div className='footer-links '>
          <h3 className='color-white'>Support</h3>
          <p className='color-white'><a href='#' className='color-white'>Contact us</a></p>
          <p className='color-white'><a href='#' className='color-white'>FAQ</a></p>
          <p className='color-white'><a href='#' className='color-white'>Terms of Service</a></p>
          <p className='color-white'><a href='#'className='color-white'>Privacy Policy</a></p>
        </div>
      </div>
      </div>



      <div className='container bottom-footer-link d-flex flex-wrap'>
        <div className='col-lg-6 d-flex'>
          <p><a href='#' className='color-white'>Terms & Conditions</a></p>
          <p className='privacy-margin'><a href='#' className='color-white'>Privacy Policy</a></p>
        </div>
        <div className='col-lg-6 social-media-icon'>
          <img src={facebook} className="facebook" />
          <img src={twitter} className="" />
          <img src={insta} className="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
