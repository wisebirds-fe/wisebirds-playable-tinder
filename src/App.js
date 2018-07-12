import React, { Component } from 'react';
import AppGuide from './AppGuide';
import AppPlay from './AppPlay';
import AppFinish from './AppFinish';
import styles from './styles';

class App extends Component {
  state = {
    isPlay: false,
    isFinish: false,
  };

  onPlay = () => this.setState({ isPlay: true });

  onFinish = () => this.setState({ isFinish: true });

  render() {
    return (
      <div style={styles.app}>
        <h1 style={styles.logo}>Tinder</h1>
        <AppPlay onFinish={this.onFinish}/>
        {this.state.isPlay && <h2 style={styles.bottom}>Swipe Guide</h2>}

        <AppGuide onClick={this.onPlay}/>
        {this.state.isFinish && <AppFinish/>}
      </div>
    );
  }
}

export default App;
