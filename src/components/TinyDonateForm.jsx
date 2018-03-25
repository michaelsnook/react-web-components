import React, { Component } from 'react';

class TinyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: ('monthly' in this.props)
    };

  }
  render() {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <section>
          <input className="stack" name="name" placeholder="Name" />
          <input type="email" name="email" className="stack" placeholder="Email" />
          <input type="number" name="amount" className="stack" placeholder={('monthly' in this.props? 'Monthly ' : '') + "Amount ($)"} />
        </section>
        <section>
          <label>
            <input type="checkbox" name="monthly" defaultChecked={'monthly' in this.props}  />
            <span className="checkable">
              Make my donation monthly
            </span>
          </label>
        </section>
        <section>
          <button className="icon-paper-plane">
            Begin
          </button>
        </section>
      </div>
    );
  }
}

export default TinyForm;
