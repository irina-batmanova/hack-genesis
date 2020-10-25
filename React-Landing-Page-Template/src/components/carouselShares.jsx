import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//
//
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
//
//
// const handleDragStart = (e) => e.preventDefault();
//
// const items = [
//   <img src="img/shares/pic1.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
//   <img src="img/shares/pic2.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
//   <img src="img/shares/pic3.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
//       <img src="img/shares/pic3.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
//   <img src="img/shares/pic3.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
//
// ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

class DemoCarousel extends Component {
    render() {
        return (
            <div id="carouselshares">
            <div className="container">
          <div className="row">
                  <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
                  <div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                  </div>
                      <div className="col-md-3"><img src={"img/shares/pic2.jpeg"} className="img-responsive" alt=""></img>
                      </div>
                      <div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                      </div>
                      <div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                      </div>
                      {/*<div className="cardBody"><img src={"img/shares/pic1.jpg"}></img></div>*/}

</Carousel>;
            </div>
            </div>
            </div>
        );
    }
}

export default DemoCarousel
