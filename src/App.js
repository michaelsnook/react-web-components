import React, { Component } from 'react';

import DemoCard from './components/DemoCard';
import ThreeStepForm from './components/ThreeStepForm';
import TinyForm from './components/TinyForm';
import TinyDonateForm from './components/TinyDonateForm';
import Gallery from './components/Gallery';

import logo from './logo.svg';
import '../node_modules/picnic/picnic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="two-800 flex">
          <DemoCard />
          <ThreeStepForm />
        </div>
        <div className="flex three-800">
          <TinyForm title="Get my newsletter" submit="Get it" />
          <TinyDonateForm />
          <TinyDonateForm monthly title="Monthly $$s" />
        </div>
        <div className="flex">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
