import React, { Component } from 'react'


export class Products extends Component {
  render() {
    return (
        <div id="products">

        <div className="container">
            <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-12">
              <div className="about-text">
                <h2>Инвестиционные продукты</h2>
                {/* <p className="list-style"> */}
                  <div style={{'margin': 'auto', 'width':'100%', 'display': 'flex', 'justify-content': 'center'}}>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Акции
                    </h1>

                    <ul>
                    {this.props.data ? this.props.data.Prod2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                    </ul>

                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >
                    Купить
                  </a>{" "}
                  </div>
                  </div>
                  </div>


                   <div className="col-lg-3 col-sm-6 col-xs-12">
                   <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Облигации
                    </h1>
                    <ul>
                      {this.props.data ? this.props.data.Prod3.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >

                    Купить
                  </a>{" "}
                    </div>
                    </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="custom_boxed">
                    <h1 style={{'text-align': 'center'}}>
                    Фонды
                    </h1>
                    <ul>
                      {this.props.data ? this.props.data.Prod4.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  <div style={{'text-align': 'center', 'padding': '5px'}}>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{'text-align': 'center'}}
                  >
                    Купить
                  </a>{" "}
                  </div>
                  </div>
                  </div>

                  </div>
                 {/* </p> */}


              </div>

            </div>


          </div>
          <div style={{'padding': '20px', 'display': 'block'}}>
             <center>
             <a href="#">Полный список предложений</a>
             </center>
            </div>
        </div>
        </div>
    )
  }
}

export default Products
