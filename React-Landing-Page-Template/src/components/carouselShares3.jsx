import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import carousel_view1 from "carousel_view1"
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

class DemoCarousel3 extends Component {
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
  transitionDuration={200}
  containerClass="container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px"
>

                  <div>
                  <div className="custom_boxed">
                    <img src={"img/6.jpg"} className="img-responsive" alt=""></img>
                  </div>
                  </div>


                   <div>
                   <div className="custom_boxed">
                    <img src={"img/7.jpg"} className="img-responsive" alt=""></img>
                   </div>
                   </div>

                    <div>
                    <div className="custom_boxed">
                    <img src={"img/8.jpg"} className="img-responsive" alt=""></img>
                  </div>
                  </div>

</Carousel>;
            </div>
            </div>
            </div>
        );
    }
}

export default DemoCarousel3
