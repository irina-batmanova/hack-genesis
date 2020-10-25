import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';

import About from './components/about';
import StrucAcc from './components/struc_acc';
import Obligations from './components/obligations';
import DemoCarousel2 from "./components/carouselShares2";
import Products from "./components/products";
import Shares from './components/shares';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App2 extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Products data={this.state.landingPageData.Products}/>
        <DemoCarousel2 />
        <Shares data={this.state.landingPageData.Shares} />
        <Obligations data={this.state.landingPageData.Obligations} />
        <StrucAcc data={this.state.landingPageData.StrucAcc} />
        <About data={this.state.landingPageData.About} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App2;
