import React from 'react'
import GalleryImg from './GalleryImg'
import locationIcon from '../../assets/images/icon/fi_map-pin.png'

function ListedGallery() {
    return (
        <div className="container mt-5">
            <div>
                <h1 className="fw-bolder list-heading">Cozy Central Apartment</h1>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 class="location-text text-muted">
                        <img src={locationIcon} />
                            15/45 Darley Street, Bondi Beach
                        </h5>
                    </div>
                    <div>
                        <a href="" className="me-5">
                            <span className="ps-1">Share</span>
                        </a>
                        <a href="">
                            <span className="ps-1">Save</span>
                        </a>
                    </div>
                </div>
            </div>
            <GalleryImg/>
        </div>
    )
}

export default ListedGallery
