import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import StrucAcc from './components/struc_acc';
import Obligations from './components/obligations';
import Features from './components/features';
import About from './components/about';
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
        <Services data={this.state.landingPageData.Services} />
        <About data={this.state.landingPageData.About} />

        <Obligations data={this.state.landingPageData.Obligations} />
        <StrucAcc data={this.state.landingPageData.StrucAcc} />

        {/*<Gallery />*/}
        {/*<Testimonials data={this.state.landingPageData.Testimonials} />*/}
        {/*<Team data={this.state.landingPageData.Team} />*/}
        {/*<Contact data={this.state.landingPageData.Contact} />*/}
      </div>
    )
  }
}

export default App;
