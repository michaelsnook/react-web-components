import React, { Component } from 'react';

class TinyForm extends Component {
  render() {
    return (
      <div>
        <input className="stack" placeholder="Name" />
        <input className="stack" placeholder="Email" />
        <button className="stack icon-paper-plane">
            Send
        </button>
      </div>
    );
  }
}

export default TinyForm;
