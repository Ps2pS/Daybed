import React from 'react'
import Card from './Card'

function Feature() {
    return (
        <div className='container '>
            <div className=' d-flex justify-content-center'>
                <div className='w-100 feature d-flex flex-column align-items-center'>
                    <h2>Why people are renting </h2>
                    <p className='bold'>with Daybed instead</p>
                    <div className='border-bottom-text'></div>
                </div>
            </div>
            <div className='d-flex flex-wrap mt-4 justify-content-between '>
                <Card />
            </div>
        </div>
    )
}

export default Feature
