import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div className="wrapper">

        <div id="about">
        <div className="container">
          <div className="row">
            {/*<div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>*/}
            <div className="col-xs-12 col-md-4"> <img src="img/app1.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Мобильное приложение «Мир инвестиций»</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Почему мы?</h3>
                <div className="list-style">
                  <div className="col-lg-8 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                </div>
                <a href='https://play.google.com/store/apps/details?id=ru.broker.my&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Доступно в Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
    )
  }
}

export default about
