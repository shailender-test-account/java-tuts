import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

// showIndicators showControls to show indicators and control buttons so put in MBDCarousel if you want 




function Carousel() {
    return (
        <div className='w-[400px] md:w-full h-[400px] md:h-[600px]  px-3 '>

            <MDBCarousel  fade >
                <MDBCarouselItem itemId={1} >
                    <img  src={img1} className=' d-block w-[400px] h-[400px] md:w-[100%] md:h-[600px] lg:h-[600px] rounded-3xl' alt='...' />
                    {/* <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}  >
                    <img src={img3} className='d-block w-[400px] h-[400px] md:w-[100%] md:h-[600px] lg:h-[600px] rounded-3xl' alt='...' />
                    {/* <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}  >
                    <img src={img2} className='d-block w-[400px] h-[400px] md:w-[100%] md:h-[600px] lg:h-[600px] rounded-3xl' alt='...' />
                    {/* <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption> */}
                </MDBCarouselItem>
            </MDBCarousel>

        </div>

    );
}

export default Carousel;