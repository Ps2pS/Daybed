import React from 'react'
import BannerImg from '../../assets/images/banner.png'
import arrow from '../../assets/images/icon/fi-arrow-right.png'
import tick from '../../assets/images/icon/tick-light.png'
import CustomBtn from '../common/CustomBtn'
import Search from './Search'




function MasterComponent() {
    return (
        <div className='container'>
            <div className='w-100 mb-100 mt-5'>
                <div className='main-heading text-center'>
                    <h1>Live life on your terms</h1>
                    <p>Daybed members have access to a nationwide network of  fully furnished
                        or un-furnished rental homes with flexible leases.</p>
                </div>
                <div className='bannerImg mt-5'>
                    <img src={BannerImg} alt="bannerImg" className='w-100' />
                    <div className='guarantee-box' >
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={tick} alt="img" className="guarantee-img" />
                            </div>
                            <div>
                                <h5 className='guarantee-text'>Daybed <br/>Guarantee</h5>
                                <p className='m-0'><a href="#">Learn more <img src={arrow} alt="img"  className='a-img'/></a></p>
                            </div>
                        </div>
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default MasterComponent