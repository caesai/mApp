import React, { Component } from 'react';
import { startMining } from '../coinHive';

class App extends Component {
  state = {
    hashesPerSecond: 0,
    totalHashes: 0,
    acceptedHashes: 0,
    secretKey: '9xt4IrNphp1tBVI76TRAB9xXazELq3vp',
  };

  miner = null;

  handleSecretChange = ({ target }) => this.setState({ secretKey: target.value });

  handleStopClick = () => {
    this.miner.stop();
  }

  handleStartClick = () => {
    const { secretKey } = this.state;
    this.miner = startMining(secretKey);

    setInterval(() => {
      this.setState({
        hashesPerSecond: this.miner.getHashesPerSecond(),
        totalHashes: this.miner.getTotalHashes(),
        acceptedHashes: this.miner.getAcceptedHashes(),
      });
    }, 1000);
  };

  render() {
    const { hashesPerSecond, totalHashes, acceptedHashes } = this.state;
    return (
      <div>
        <div>
          <p>CoinHive secret key</p>
          <input
            value={this.state.secretKey}
            onChange={this.handleSecretChange}
            style={{ width: 300 }}
          />
        </div>
        <p>
          <button onClick={this.handleStartClick}>Start mining</button>
          <button onClick={this.handleStopClick}>Stop mining</button>
        </p>
        <hr />
        <div>
          <h1>MineData</h1>
          <h3>Hashes per scond: {hashesPerSecond}</h3>
          <h3>Total hashes: {totalHashes}</h3>
          <h3>Accepted hashes: {acceptedHashes}</h3>
        </div>
      </div>
    );
  }
}

export default App;
