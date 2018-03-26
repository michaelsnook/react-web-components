import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <label htmlFor={'modal_' + this.props.instance} className={"button " + this.props.className}>
        <span>{this.props.button}</span>
        <div class="modal">
          <input id={'modal_' + this.props.instance} type="checkbox" />
          <label htmlFor={'modal_' + this.props.instance} className="overlay"></label>
          <article>
            {this.props.children}
          </article>
        </div>

      </label>
    );
  }
}

export default Modal;
