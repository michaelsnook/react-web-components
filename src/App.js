import React, { Component } from 'react';

import PageOfComponents from './components/PageOfComponents';
import PageOfElements from './components/PageOfElements';
import Modal from './components/Modal';
import CallingList from './components/CallingList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let donors = [
      {
        name: 'Michael S',
        phone: '+1 555 555 1234',
        card_info_is_stored: false,
        request_new_card: false,
        previous_donations: [
          { created_at: new Date(1522167536569), amount: 50.00 },
          { created_at: new Date(1512117536569), amount: 25.00 },
          { created_at: new Date(1472117536569), amount: 5.00 }
        ],
        lifetime_total: 80,
        highest_previous: 50,
        request_recurring: 25
      }, {
        name: 'Person P',
        phone: '+1 555 123 1555',
        card_info_is_stored: true,
        request_new_card: false,
        previous_donations: [
          { created_at: new Date(1522167536569), amount: 15.00 },
          { created_at: new Date(1512117536569), amount: 5.00, recurring: true, frequency: 'monthly', recurrences_planned: 24, recurrences_complete: 4, most_recent_at: new Date(1519866000569) },
          { created_at: new Date(1472117536569), amount: 5.00 }
        ],
        lifetime_total: 40,
        highest_previous: 15,
        request_recurring: 10
      }, {
        name: 'Plerson L',
        phone: '+1 555 123 1555',
        card_info_is_stored: true,
        request_new_card: false,
        previous_donations: [],
        lifetime_total: 40,
        highest_previous: 15,
        request_recurring: 10
      }
    ];

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
              <Modal button="elements" className="pseudo" instance="1">
                <PageOfElements />
              </Modal>
            </div>
          </div>
        </header>
        <main class="App-main flex">
          <CallingList donors={donors} />
        </main>
      </div>
    );
  }
}

export default App;
