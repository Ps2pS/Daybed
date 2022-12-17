import React from 'react'
import img1 from '../../assets/images/image-1.png'
import img2 from '../../assets/images/image-2.png'
import img3 from '../../assets/images/image-3.png'
import img4 from '../../assets/images/image-4.png'
import img5 from '../../assets/images/image-5.png'
import icon1 from '../../assets/images/icon/Look-Vector.png'
import icon2 from '../../assets/images/icon/Floorplan-Vector.png'
import gridicon from '../../assets/images/icon/fi_grid.png'
import { Button } from '@mui/material'

function GalleryImg() {
    return (
        <div>
            <div className="row mt-2">
                <div className=" gallery-relative col-lg-6 col-md-6 col-sm-12 col-12 pt-2">
                    <img
                        className="img-fluid rounded-3"
                        src={img1}
                        alt=""
                    />
                    <div className="floating-gallery-btn bg-white d-flex justify-content-between align-items-center">
                        <div className="  d-flex align-items-center">
                            <span>
                                <img src={icon1} alt="" className='me-1' /> Look inside
                            </span>
                        </div>
                        <div>
                            <span className='px-2 text-muted'> | </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span>
                                <img src={icon2} alt="" className='me-1' /> Floorplan
                            </span>
                        </div>
                    </div>

                    <div className="floating-btn-box bg-white">
                        <Button className='btn-darkblue me-2'>
                            Furnished
                        </Button>
                        <Button className='btn-darkblue '>
                            Un-furnished
                        </Button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="row row-auto ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                            <img
                                className="img-fluid rounded-3"
                                src={img2}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                            <img
                                className="img-fluid rounded-3"
                                src={img3}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-2">
                            <img
                                className="img-fluid rounded-3"
                                src={img4}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-2 floating-btn-box-2">
                            <img
                                className="img-fluid rounded-3"
                                src={img5}
                                alt=""
                            />
                            <div className='floating-box'>
                                <Button className="floating-btn-2 btn bg-white btn-text-small fw-bold ">
                                    <img src={gridicon} alt="" /> <span>See all photos</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImg
