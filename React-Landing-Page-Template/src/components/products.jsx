import React, { Component } from 'react'


export class Products extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
            <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-12">
              <div className="about-text">
                <h2>Инвестиционные продукты</h2>
                <p className="list-style">
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Prod1.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Prod2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                    </ul>
                  </div>
                   <div className="col-lg-3 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Prod3.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Prod4.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
