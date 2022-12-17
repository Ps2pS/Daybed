import React from 'react'
// import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import darkRightArrow from "../../assets/images/icon/dark-arrow-right.png";
import darkLeftArrow from "../../assets/images/icon/dark-arrow-left.png";



const ImgData = [

    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/Screen-Shot-2022-09-15-at-14.45-1.png',
        title: "Seminar Room",

    },

]
const handleRightSlide = () => {
    document.getElementById("carousel-right-arrow").click();
};
const handleLeftSlide = () => {
    document.getElementById("carousel-left-arrow").click();
};

function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '170px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: false,
        nextArrow: <CustomRightArrow />,
        prevArrow: <CustomLeftArrow />,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    centerPadding: '80px',
                    infinite: true,
                    variableWidth: false,
                    arrows: false,
                }
            },

        ]
    };

    return (
        <div className='mt-5'>
            <div className='container py-5'>
                <p className='slider-text1'>Every furnished Daybed</p>
                <p className='slider-text2'>comes with premium amenities</p>
            </div>
            <div className='carousel-position'>
                <Slider {...settings}>

                    {
                        ImgData.map((val, index) => {

                            return (
                                <>
                                    <div className=' carousel-img me-3 ' >
                                        <img id={index} src={val.img} className="hover-shadow" />
                                    </div>
                                </>
                            );
                        })
                    }
                </Slider>
                <div className='left-arrow hide'>
                    <img src={darkLeftArrow}  onClick={handleLeftSlide}  />
                </div>
                <div className='right-arrow hide'>
                    <img src={darkRightArrow} onClick={handleRightSlide} />
                </div>
            </div>
        </div>
    )
}

export default Carousel

const CustomRightArrow = ({ onClick }) => {
    return (
        <i
            id="carousel-right-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};
const CustomLeftArrow = ({ onClick }) => {
    return (
        <i
            id="carousel-left-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};