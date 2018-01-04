import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Coinlist from './coinList.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'Hello Michael!',
      clicked: false,
      data: []
    }
  }

  getCrypto() {
    console.log('it works!');
    axios.get('/crypto')
      .then((res) => {
        this.setState({
          clicked: true,
          data: res.data
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='main'>
        <h1> {this.state.sample}</h1>
        {this.state.clicked
          ? <button onClick={() => this.getCrypto()} type='button'> Refresh! </button>
          : <button onClick={() => this.getCrypto()} type='button'> Click Me! </button>
        }
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>USD</th>
              <th>BTC</th>
              <th>Percent Change</th>
            </tr>
          </thead>
          <Coinlist data={this.state.data}/>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
