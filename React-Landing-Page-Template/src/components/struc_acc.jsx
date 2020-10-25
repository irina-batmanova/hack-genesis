import React, { Component } from 'react'

export class strucAcc extends Component {
  render() {
    return (
            <div className="wrapper">

        <div id="struc_acc">
        <div className="container">
          <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-12">
              <div className="about-text">
                <h2>Фонды и структурные продукты</h2>
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

export default strucAcc
