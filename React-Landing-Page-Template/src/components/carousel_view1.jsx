import React, { Component } from "react";

export class carousel_view1 extends Component {
  render() {
    return (
        <div class="container_deep">
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
         </div>
    );
  }
}

export default carousel_view1;