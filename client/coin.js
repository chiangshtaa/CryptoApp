import React from 'react';

class Coin extends React.Component {
  render() {
    return (
      <tr className='item'>
        <td>{this.props.rank}</td>
        <td>{this.props.name}</td>
        <td>{this.props.USD}</td>
        <td>{this.props.BTC}</td>
        {this.props.change < 0 ? <td style={{color: 'red'}}> {this.props.change} %</td> : <td style={{color: 'green'}}>{this.props.change} %</td>}
      </tr>
    )
  }
}

module.exports = Coin;