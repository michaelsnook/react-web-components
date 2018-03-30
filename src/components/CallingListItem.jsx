import React, { Component } from 'react';

function printAskType(person) {
  if (person.previous_donations.length == 0) return 'first time';
  return;

}
class CallingListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.person.name}</td>
        <td>{this.props.person.phone}</td>
        <td>{this.props.person.previous_donations.map(donation => '' + donation.amount + ', ')}</td>
        <td>{printAskType(this.props.person)}</td>
      </tr>
    );
  }
}

export default CallingListItem;
