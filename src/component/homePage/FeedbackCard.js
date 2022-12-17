import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#85B8A2',
    },
    // '& .MuiRating-iconHover': {
    //   color: '#ff3d47',
    // },
});

const FeedbackDetails = [
    {
        id: 1,
        name: "Charlie ",
        address: "Paddington, NSW",
        discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain."
    },
    { id: 2, name: "Meghan ", address: "Bondi, NSW", discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain." },
    { id: 3, name: "Henry", address: "South Yarra, VIC", discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain." },
    {
        id: 4,
        name: "Charlie ",
        address: "Paddington, NSW",
        discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain."
    },
    { id: 5, name: "Meghan ", address: "Bondi, NSW", discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain." },
    { id: 6, name: "Henry", address: "South Yarra, VIC", discription: "It’s super difficult to find an apartment for anything under 3 months and when you do, they’re often as much as twice the rental price. Also, furnishing an apartment for a few months is a massive pain." },



]

function FeedbackCard() {

    var feedback_carousel = {
        dots: false,
        infinite: true,
        speed: 500,
        // centerMode: true,
        // centerPadding: '100px',
        slidesToShow: 3,
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
                    autoplay: false,
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
        <div className='mt-5'>
            <Slider {...feedback_carousel}>{
                FeedbackDetails.map((key, val) => {
                    {
                        return (
                            <div className='feedback-card ' >
                                <Stack spacing={1}>
                                    <StyledRating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                </Stack>
                                <div className='mt-3'>
                                    <h3>{key.name} </h3>
                                    <h4>{key.address}</h4>
                                    <p>{key.discription}</p>
                                </div>
                            </div>
                        )
                    }
                }
                )
            }
            </Slider>
        </div>
    )
}

export default FeedbackCard
