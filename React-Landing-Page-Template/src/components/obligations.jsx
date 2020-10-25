import React, { Component } from 'react'

export class obligations extends Component {
  render() {
    return (
        <div className="wrapper">

        <div id="obligations">
        <div className="container">
          <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-12">
              <div className="about-text">
                <h2>Облигации</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
  }
}

export default obligations
