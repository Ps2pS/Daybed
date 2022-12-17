import React from 'react'
import AriaMap from './AriaMap'
// import GoogleMap from './AriaMap'

function Aria() {
    return (
       
            <div className='container m-top my-5'>
            <div>
                <h2>Available rooms</h2>
                <p>In the heart of Bondi, this sun lit  one bedroom apartment is the city slickers dream. The commute to the cbd is all but 10 minutes by bus or train
                You also have access to the light rail system.</p>
                <p><a class="color-lightgreen read-more-link" href="">Read More</a></p>
                </div>
                <AriaMap/>
                </div>
       
    )
}

export default Aria
