import React from 'react';

class Coin extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.rank}</td>
        <td>{this.props.name}</td>
        <td>{this.props.USD}</td>
        <td>{this.props.BTC}</td>
        <td>{this.props.change}</td>
      </tr>
    )
  }
}

module.exports = Coin;