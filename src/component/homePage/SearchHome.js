import React from 'react';
import PlantImg from '../../assets/images/plant.png';
import SofaImg from '../../assets/images/sofa.png';
import { Button } from '@mui/material'


function SearchHome() {
    return (
        <div className='bg-img'>
            <div className='container flex-wrap p-top-bottom d-flex'>
                <div className=' col-lg-6 search-home-sec'>
                    <div className=''>
                        <img src={PlantImg} className='plnt-img' />
                        <img src={SofaImg} className='sofa-img' />
                    </div>

                </div>
                <div className='col-lg-6 '>
                <div className='text-sec-inner'>
                <h2>Or start with a blank canvas
                        and make it your own</h2>
                    <div className='mt-5'>
                        <Button variant="contained" className='search-btn2'>
                            Search Homes
                        </Button>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchHome
