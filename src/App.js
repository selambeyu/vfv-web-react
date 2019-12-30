import React, { Component } from 'react';
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'
import Sidenav from './components/layouts/sidebar'

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header></Header>
        <Sidenav></Sidenav>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;