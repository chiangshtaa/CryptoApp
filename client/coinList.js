import React from 'react';
import Coin from './coin.js';

class coinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rank: '',
      priceUSD: '',
      priceBTC: '',
      marketCap: '',
      available: '',
      percentChange: ''
    }
  }

  render() {
        console.log('coinlist', this.props);
    return (
      <tbody>
      {this.props.data.map((coin, index) => {
        return (<Coin name={coin.name} rank={coin.rank} USD={coin.price_usd} BTC={coin.price_btc} change={coin.percent_change_24h} key={index}/>)
      })}
      </tbody>
    )
  }
}

module.exports = coinList;