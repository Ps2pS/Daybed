import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_img from "../../assets/images/image-6.png"

const RoomsDetails = [
    {
        id: 1,
        RoomName: "Room A",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
    {
        id: 2,
        RoomName: "Room B",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
    {
        id: 3,
        RoomName: "Room B",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
    {
        id: 4,
        RoomName: "Room B",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
    {
        id: 5,
        RoomName: "Room B",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
    {
        id: 6,
        RoomName: "Room B",
        discription: "Move in available from 8th of September",
        price: "$500/w",
    },
]

function AvailableRoomsCarousel() {

    var Roomscarousel = {
        dots: false,
        infinite: true,
        speed: 500,
        // centerMode: true,
        // centerPadding: '100px',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: false,
        arrows: false,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    variableWidth: false,
                    arrows: true,

                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    variableWidth: true,
                    arrows: false,
                }
            },
        ]
    };
    return (
        <div className='m-top mb-5'>
            <div className='container my-5'>
                <h2>Available rooms</h2>
            </div>
            <Slider {...Roomscarousel}>{
                RoomsDetails.map((val, key) => {
                    {
                        return (
                            <div className='rooms_carousel px-3' key={val.id}>
                                <img src={carousel_img} className="w-100 " />
                                <div className='rooms_carousel_text'>
                                <h3>{val.RoomName}</h3>
                                <p >{val.discription}</p>
                                <h4>{val.price}</h4>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </Slider>
        </div>
    )
}

export default AvailableRoomsCarousel
