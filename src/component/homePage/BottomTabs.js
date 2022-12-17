import React from 'react'
import PlaceName from './PlaceName'

function BottomTabs() {

  return (
   
    <div className='mt-5 '>
    <div className='border-btm'>
        <div className='container '>
            <ul className="nav nav-h d-flex justify-content-between nav-pills " id="pills-tab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link active custm-tab custm-tab-size" id="pills-Trending-Suburbs-tab" data-bs-toggle="pill" data-bs-target="#pills-Trending-Suburbs" type="button" role="tab" aria-controls="pills-Trending-Suburbs" aria-selected="true" >Trending Suburbs</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-NSW-tab" data-bs-toggle="pill" data-bs-target="#pills-NSW" type="button" role="tab" aria-controls="pills-NSW" aria-selected="false">NSW</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-Victoria-tab" data-bs-toggle="pill" data-bs-target="#pills-Victoria" type="button" role="tab" aria-controls="pills-Victoria" aria-selected="false">Victoria</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-Queensland-tab" data-bs-toggle="pill" data-bs-target="#pills-Queensland" type="button" role="tab" aria-controls="pills-Queensland" aria-selected="false">Queensland</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-South-Australia-tab" data-bs-toggle="pill" data-bs-target="#pills-South-Australia" type="button" role="tab" aria-controls="pills-South-Australia" aria-selected="false">South-Australia</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-WA-tab" data-bs-toggle="pill" data-bs-target="#pills-WA" type="button" role="tab" aria-controls="pills-WA" aria-selected="false">WA</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custm-tab custm-tab-size" id="pills-Tasmania-tab" data-bs-toggle="pill" data-bs-target="#pills-Tasmania" type="button" role="tab" aria-controls="pills-Tasmania" aria-selected="false">Tasmania</button>
                </li>
            </ul>
        </div>
    </div>
    <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active " id="pills-Trending-Suburbs" role="tabpanel" aria-labelledby="pills-Trending-Suburbs-tab"> 
          <PlaceName/>
        </div>
     
          <div class="tab-pane fade" id="pills-NSW" role="tabpanel" aria-labelledby="pills-NSW-tab">NSW</div>
          <div class="tab-pane fade" id="pills-Victoria" role="tabpanel" aria-labelledby="pills-Victoria-tab">Victoria</div>
          <div class="tab-pane fade" id="pills-Queensland" role="tabpanel" aria-labelledby="pills-Queensland-tab">Queensland</div>
          <div class="tab-pane fade" id="pills-South-Australia" role="tabpanel" aria-labelledby="pills-South-Australia-tab">South Australia</div>
          <div class="tab-pane fade" id="pills-WA" role="tabpanel" aria-labelledby="pills-WA-tab">WA</div>
          <div class="tab-pane fade" id="pills-Tasmania" role="tabpanel" aria-labelledby="pills-Tasmania-tab">Tasmania</div>
     
    </div>
</div>
  
  )
}

export default BottomTabs
