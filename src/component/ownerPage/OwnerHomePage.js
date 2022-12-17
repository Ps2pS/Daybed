import { Button } from '@mui/material'
import React from 'react'
import Card from './Card'
import './ownerhomepage.css'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img4.png'
import img3 from '../../assets/images/img5.png'
import img4 from '../../assets/images/Meeting.png'


function OwnerHomePage() {
    return (
        <div className='container'>
            <div className='text-center main-heading my-5'>
                <p className='text-muted'>Daybed helps landlords get more from their properties</p>
                <h1>Increase your weekly rental<br/> yield by <span className='text-green'>20-30%</span></h1>
                <Button className='btn-green'>Get Quote</Button>
                <h2 className=' on-text1 mb-0'>This is what we do</h2>
                <h2 className='on-text2'>for landlords</h2>
            </div>
            <div className='d-flex flex-wrap mt-4 justify-content-between '>
                <Card />
            </div>
            <div class="main-heading text-center mt-5rem">
                <h1>How it works</h1>
                <p className='pd '>We’ve built the worlds most streamlined, tech-enabled renting experience for both Landlords and Renters alike, leveraging sophisticated software and data to ensure the fastest listing times with the highest quality digital assets to represent your home, enabling access to our pool of vetted tenants on the Daybed App. For the first time ever, the entire scope of the rental experience exists online.</p>
            </div>
            <div className='d-flex  flex-wrap mt-5rem'>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='owner-inr-txt'>
                        <h2 className='mb-0'>Property
                        </h2>
                        <h2 className='text_bold'> Details</h2>
                        <p>Tell us a bit more about your home, providing a few basic details so we can get started with a tailored solution. </p>
                        <a className='get-start' >Get Started</a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={img1} className="w-100 p-5" />
                </div>
            </div>
            <div className='d-flex  flex-wrap mt-5rem'>
            <div className='col-lg-6'>
                    <img src={img2} className="w-100 p-5" />
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='owner-inr-txt'>
                        <h2 className='mb-0'>Property
                        </h2>
                        <h2 className='text_bold'> Details</h2>
                        <p>Tell us a bit more about your home, providing a few basic details so we can get started with a tailored solution. </p>
                        <a className='get-start' >Get Started</a>
                    </div>
                </div>
                
            </div>
            <div className='d-flex  flex-wrap mt-5rem'>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='owner-inr-txt'>
                        <h2 className='mb-0'>Property
                        </h2>
                        <h2 className='text_bold'> Details</h2>
                        <p>Tell us a bit more about your home, providing a few basic details so we can get started with a tailored solution. </p>
                        <a className='get-start' >Get Started</a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={img3} className="w-100 p-5" />
                </div>
            </div>
            <div className='d-flex  flex-wrap mt-5rem'>
            <div className='col-lg-6'>
            <img src={img4} className="w-100 p-5" />
        </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='owner-inr-txt'>
                        <h2 className='mb-0'>Property
                        </h2>
                        <h2 className='text_bold'> Details</h2>
                        <p>Tell us a bit more about your home, providing a few basic details so we can get started with a tailored solution. </p>
                        <a className='get-start' >Get Started</a>
                    </div>
                </div>
               
            </div>
            
        </div>
    )
}

export default OwnerHomePage