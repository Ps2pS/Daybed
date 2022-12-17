import React from 'react'
import RightArrow from '../../assets/images/icon/fi_arrow-right.png';
import LeftArrow from '../../assets/images/icon/fi_arrow-left.png';
import Location_icon from '../../assets/images/icon/location.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomTabs from './BottomTabs';


const ImgData = [

    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-5.png',
        title: "Bondi",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-4.png',
        title: "Byron Bay",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-2-1.png',
        title: "Manly",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-1-1.png',
        title: "Sydney",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-6.png',
        title: "Surry Hills",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-4.png',
        title: "Byron Bay",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-2-1.png',
        title: "Surry Hills",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-1-1.png',
        title: "Manly",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-6.png',
        title: "Byron Bay",

    },


]

const arrowRightSlide = () => {
    document.getElementById("subrubs-carousel-right-arrow").click();
};
const arrowLeftSlide = () => {
    document.getElementById("subrubs-carousel-left-arrow").click();
};

function Subrubs() {

    const sub_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: false,
        nextArrow: <CustomRightIcon />,
        prevArrow: <CustomLeftIcon />,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '50px',
                    autoplay: true,
                    infinite: true,
                    variableWidth: false,
                    arrows: false,
                }
            },

        ]
    };


    return (
        <div className=' suburbs_sec'>
            <div className='container'>
                <h2>These are some of the </h2>
                <div className='d-flex justify-content-between'>
                    <h2><strong> suburbs people love living in</strong></h2>
                    <div className='arrow-icon2 hide d-flex align-items-center'>
                        <img src={LeftArrow} className='' onClick={arrowLeftSlide} />
                        <span> | </span>
                        <img src={RightArrow} className='' onClick={arrowRightSlide} />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Slider {...sub_settings}>

                    {
                        ImgData.map((val, index) => {

                            return (
                                <>
                                    <div className=' sub-carousel-img me-2 ' >
                                        <img id={index} src={val.img} className="sub-img" />
                                        <div className='title'>
                                         <img src={Location_icon} />  <span>{val.title}</span>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </Slider>
            </div>
<BottomTabs/>
            
        </div>
    )
}

export default Subrubs

const CustomRightIcon = ({ onClick }) => {
    return (
        <i
            id="subrubs-carousel-right-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};
const CustomLeftIcon = ({ onClick }) => {
    return (
        <i
            id="subrubs-carousel-left-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};