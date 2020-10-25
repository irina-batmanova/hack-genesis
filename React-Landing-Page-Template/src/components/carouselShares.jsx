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
  transitionDuration={200}
  containerClass="container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px"
>
                  {/*<div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                  </div>
                      <div className="col-md-3"><img src={"img/shares/pic2.jpeg"} className="img-responsive" alt=""></img>
                      </div>
                      <div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                      </div>
                      <div className="col-md-3"><img src={"img/shares/pic1.jpg"} className="img-responsive" alt=""></img>
                      </div> */}

                  <div >
                  <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Акции
                    </h1>

                    <ul>
                    {this.props.data ? this.props.data.Prod1.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                    </ul>

                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#shares"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >
                    Подробнее
                  </a>{" "}
                  </div>
                  </div>
                  </div>


                   <div>
                   <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Облигации
                    </h1>
                    <ul>
                      {this.props.data ? this.props.data.Prod2.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#obligations"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >

                    Подробнее
                  </a>{" "}
                    </div>
                    </div>
                    </div>

                    <div>
                    <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Фонды
                    </h1>
                    <ul>
                      {this.props.data ? this.props.data.Prod3.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#struc_acc"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >
                    Подробнее
                  </a>{" "}
                  </div>
                  </div>
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
