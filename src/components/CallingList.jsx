import React, { Component } from 'react';
import CallingListItem from './CallingListItem';

class CallingList extends Component {
  render() {
    return (
      <table class="primary">
        <thead>
          <tr>
            <th>name</th>
            <th>phone</th>
            <th>donations</th>
            <th>ask type</th>
          </tr>
        </thead>
        <tbody>
          {this.props.donors.map(person => <CallingListItem person={person} />)}
        </tbody>
      </table>

    );
  }
}

export default CallingList;
