import React from 'react'
import darkBed from '../../assets/images/icon/dark-bed.png'
import bathTub from '../../assets/images/icon/bath-tub.png'
import meter from '../../assets/images/icon/meter.png'
import bulb from '../../assets/images/icon/bulb.png'
import { Button } from '@mui/material'

function ListedDetails() {
    return (
        <section className="container my-5">
            <div className="row row-auto">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12  list-details-heading">
                    <h2>Enitre Apartment in Bondi Beach New South Wales</h2>
                    <div className="w-75 my-4">
                        <ul className="d-flex justify-content-between list-none icon-text-color p-0">
                            <li className="d-flex align-items-center">
                                <img className="vector me-2" src={darkBed} alt="" />
                                <span className=" "> 1 bedroom</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <img
                                    className="vector me-2"
                                    src={bathTub}
                                    alt=""
                                />{" "}
                                <span className=" ">1 bath</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <img
                                    className="vector me-2"
                                    src={meter}
                                    alt=""
                                />{" "}
                                <span className=" ">150 m</span>
                            </li>
                        </ul>
                    </div>
                    <p className=" text-small">
                        In the heart of Bondi, this sun lit one bedroom apartment is the
                        city slickers dream. The commute to the cbd is all but 10 minutes
                        by bus or train. You also have access to the light rail system.{" "}
                        <br />
                        <br />
                        Some of the best schools in the country are also located here,
                        perfect for those with young children looking to learn things.
                        <br />
                        <br />
                        In the heart of Bondi, this sun lit one bedroom apartment is the
                        city slickers dream. The commute to the cbd is all but 10 minutes
                        by bus or train. You also have access to the light rail system.
                    </p>
                    <p>
                        <a className="color-lightgreen read-more-link" href="">
                            Read More
                        </a>
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 pricing-text">
                    <div className="">
                        <h4 className="d-inline">
                            $500 <span className="pricing-text-muted">/per week</span>{" "}
                        </h4>
                        <h6 className="d-inline">
                            +$20 <span className="pricing-text-muted"> service fee</span>{" "}
                        </h6>
                        <p className="color-lightgreen mt-2">
                            <img src={bulb} />Incl. high speed internet +
                            utilities*{" "}
                        </p>
                    </div>
                    <div>
                        <div className="border rounded-2 p-2 my-3 lh-lg">
                            <p>
                                <span className="fw-bolder"> Duration</span>
                                <br /> 23rd September 2022
                            </p>
                        </div>
                        <div className="border rounded-2 p-2 lh-lg">
                            <p>
                                <span className="fw-bolder"> Duration</span>
                                <br /> 3 months <br />
                                <span className="fst-italic text-muted">
                                    {" "}
                                    3 months available from 27th Aug 2022
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                        <Button className="furnished-btn mr-3">
                                <i class="bi bi-check-circle-fill me-2"></i>
                                <span>Un-Furnished</span>
                        </Button>
                        <Button className="furnished-btn">
                                <span>Furnished (+$50w)</span>
                        </Button>
                    </div>
                    <div className="my-2">
                        <Button className=" btn-lightgreen w-100 py-3">Continue</Button>
                    </div>
                    {
                    // <div>
                        // <div className=" py-3 mt-3 bg-lightblack rounded-3 d-flex justify-content-around align-items-center">
                        //     <div>
                        //         <h5>
                        //             <span>
                        //                 {" "}
                        //                 <i class="bi bi-exclamation-circle"></i>
                        //             </span>
                        //             <span>
                        //                 {" "}
                        //                 Save $100 / week <br /> If you extend your stay to 6
                        //                 months
                        //             </span>
                        //         </h5>
                        //     </div>
                        //     <div>
                        //         <p className="text-end mb-4">x</p>
                        //         <button className="btn btn-lightblack">Extend</button>
                        //     </div>
                        // </div>
                    // </div>
                }
                </div>
            </div>
        </section>
    )
}

export default ListedDetails
