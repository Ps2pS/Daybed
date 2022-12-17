import React from 'react';
import GalleryCarousel from '../homePage/GalleryCarousel';
import Aria from './Arias';
import AvailableRoomsCarousel from './AvailableRoomsCarousel';
import './homelisting.css';
import ListedDetails from './ListedDetails';
import ListedGallery from './ListedGallery';

function HomeListing() {
  return (
    <>
      <ListedGallery/>
      <ListedDetails/>
      <AvailableRoomsCarousel/>
      <GalleryCarousel/>
      <Aria/>
    </>
  )
}

export default HomeListing
