import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';

import About from './components/about';
import StrucAcc from './components/struc_acc';
import Obligations from './components/obligations';
import DemoCarousel from "./components/carouselShares";
import Products from "./components/products";
import Features from './components/features';
import Shares from './components/shares';
import Recommend from './components/mayBeInteresting';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
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
        <Recommend />
        {/*<DemoCarousel />*/}
        <Shares data={this.state.landingPageData.Shares} />
        <Obligations data={this.state.landingPageData.Obligations} />
        <StrucAcc data={this.state.landingPageData.StrucAcc} />
        <About data={this.state.landingPageData.About} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
