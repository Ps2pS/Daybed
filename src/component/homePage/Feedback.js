import React from 'react'
import FeedbackCard from './FeedbackCard'

function Feedback() {
  return (
    <div className='container-fluid mt-5 mb-5'>
      <div className='d-flex justify-content-center feedback'>
          <h2>Don’t just take our word for it</h2>
      </div>
      <FeedbackCard/>
    </div>
  )
}

export default Feedback
