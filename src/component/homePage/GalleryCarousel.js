import React from 'react'
import RightArrow from '../../assets/images/icon/fi_arrow-right.png';
import LeftArrow from '../../assets/images/icon/fi_arrow-left.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgData = [

    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32.png',
        title: "Amazon echo",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-33.png',
        title: "Ultrafast internet",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-1.png',
        title: "Smart TV",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-2.png',
        title: "Ducted aircon",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-3.png',
        title: "Ergonomic Chair",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-1.png',
        title: "Ergonomic Chair",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-2.png',
        title: "Ergonomic Chair",

    },
    {
        img: 'https://vips.edu/wp-content/uploads/2022/10/image-32-3.png',
        title: "Ergonomic Chair",

    },


]
const handleRightSlide = () => {
    document.getElementById("recent-carousel-right-arrow").click();
};
const handleLeftSlide = () => {
    document.getElementById("recent-carousel-left-arrow").click();
};


function GalleryCarousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: false,
        nextArrow: <CustomRightArrow />,
        prevArrow: <CustomLeftArrow />,


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
        <div className='bg-color'>
            <div className='container d-flex inner-part'>
                <div className='col-lg-11'>
                    <h3>Here’s what your Daybed comes with</h3>
                </div>
                <div className='col-lg-1 hide m-0 p-0 '>
                    <div className='arrow-icon d-flex align-items-center'>
                        <img src={LeftArrow} className='' onClick={handleLeftSlide} />
                        <span> | </span>
                        <img src={RightArrow} className='' onClick={handleRightSlide} />
                    </div>
                </div>
            </div>
            <div className='mt-5 '>
                <div className='border-btm1'>
                    <div className='container '>
                        <ul className="nav nav-h d-flex justify-content-around nav-pills " id="pills-tab" role="tablist">
                            <li className="nav-item " role="presentation">
                                <button className="nav-link active custm-tab" id="pills-Living-Room-tab" data-bs-toggle="pill" data-bs-target="#pills-Living-Room" type="button" role="tab" aria-controls="pills-Living-Room" aria-selected="true">Living Room</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link custm-tab" id="pills-Kitchen-tab" data-bs-toggle="pill" data-bs-target="#pills-Kitchen" type="button" role="tab" aria-controls="pills-Kitchen" aria-selected="false">Kitchen</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link custm-tab" id="pills-Bedroom-tab" data-bs-toggle="pill" data-bs-target="#pills-Bedroom" type="button" role="tab" aria-controls="pills-Bedroom" aria-selected="false">Bedroom</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link custm-tab" id="pills-Bathroom-tab" data-bs-toggle="pill" data-bs-target="#pills-Bathroom" type="button" role="tab" aria-controls="pills-Bathroom" aria-selected="false">Bathroom</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link custm-tab" id="pills-Utilities-tab" data-bs-toggle="pill" data-bs-target="#pills-Utilities" type="button" role="tab" aria-controls="pills-Utilities" aria-selected="false">Utilities</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active pb-4" id="pills-Living-Room" role="tabpanel" aria-labelledby="pills-Living-Room-tab">  <div>

                    <Slider {...settings}>
                    {
                      ImgData.map((val, index) => {
          
                          return (
                              <>
                                  <div className=' gallery-carousel mt-4 ' >
                                      <img id={index} src={val.img} className="gallery-carousel-img" />
                                      <p className='img-title'>{val.title}</p>
                                  </div>
                              </>
                          );
                      })
                  }
                   </Slider>
                  </div>
                  </div>
                  {

                    
                    //   <div class="tab-pane fade" id="pills-Kitchen" role="tabpanel" aria-labelledby="pills-Kitchen-tab">Kitchen</div>
                    //   <div class="tab-pane fade" id="pills-Bedroom" role="tabpanel" aria-labelledby="pills-Bedroom-tab">Bedroom</div>
                    //   <div class="tab-pane fade" id="pills-Bathroom" role="tabpanel" aria-labelledby="pills-Bathroom-tab">Bathroom</div>
                    //   <div class="tab-pane fade" id="pills-Utilities" role="tabpanel" aria-labelledby="pills-Utilities-tab">Utilities</div>
                  }
                </div>
            </div>
        </div>

      
    )
}

export default GalleryCarousel;

const CustomRightArrow = ({ onClick }) => {
    return (
        <i
            id="recent-carousel-right-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};
const CustomLeftArrow = ({ onClick }) => {
    return (
        <i
            id="recent-carousel-left-arrow"
            className="d-none"
            onClick={() => onClick()}
        />
    );
};