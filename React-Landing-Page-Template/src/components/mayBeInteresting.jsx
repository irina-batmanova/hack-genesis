import React, { Component } from 'react'

export class recommend extends Component {
  render() {
    return (
        <div className="wrapper">
        <div id="shares">
        <div className="container">
          <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-12">
              <div className="about-text">
                <h2>Может быть интересно</h2>
{/*                 <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p> */}

{/*                     <div className="col-lg-6 col-sm-6 col-xs-12"> */}
{/*                     <ul> */}
{/*                     {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'} */}
{/*                     </ul> */}
{/*                   </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
    )
  }
}

export default recommend
