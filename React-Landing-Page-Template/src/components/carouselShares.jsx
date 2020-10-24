import React, { Component } from 'react';


import AliceCarousel from 'react-alice-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <div id="carouselshares">
            <div className="container">
          <div className="row">
              <div className="col-xs-12 col-md-12">
            <AliceCarousel>
                <img src="img/shares/pic1.jpg" className="yours-custom-class" />
                <img src="img/shares/pic1.jpg" className="yours-custom-class" />
                <img src="img/shares/pic1.jpg" className="yours-custom-class" />
                <img src="img/shares/pic1.jpg" className="yours-custom-class" />
                <img src="img/shares/pic1.jpg" className="yours-custom-class" />
              </AliceCarousel>
          </div>
            </div>
            </div>
            </div>
        );
    }
}

export default DemoCarousel
