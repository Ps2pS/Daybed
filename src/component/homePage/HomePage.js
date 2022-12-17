import React from 'react'
import Carousel from './Carousel'
import Feature from './Feature'
import Feedback from './Feedback'
import GalleryCarousel from './GalleryCarousel'
import './homepage.css'
import MasterComponent from './MasterComponent'
import SearchHome from './SearchHome'
import Subrubs from './Subrubs'

function HomePage(props) {

 
  console.log('props Data----', props.homePageData);
  return (
    <div >
      <MasterComponent />
      <Feature />
      <Carousel />
      <GalleryCarousel />
      <SearchHome />
      <Feedback />
      <Subrubs />
    </div>
  )
}

export default HomePage
