import React, { Component } from 'react';

class TinyForm extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <input className="stack" placeholder="Name" />
        <input className="stack" placeholder="Email" />
        <button className="stack icon-paper-plane">
            { this.props.submit || 'Send' }
        </button>
      </div>
    );
  }
}

export default TinyForm;
