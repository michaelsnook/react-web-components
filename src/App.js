import React, { Component } from 'react';

import PageOfComponents from './components/PageOfComponents';
import PageOfElements from './components/PageOfElements';
import Modal from './components/Modal';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header flex two">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="App-title">Hello from Website</h1>
            <div>
              <Modal button="components" className="pseudo" instance="3">
                <PageOfComponents />
              </Modal>
              <Modal button="elements" className="pseudo"  instance="1">
                <PageOfElements />
              </Modal>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
