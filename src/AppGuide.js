import * as React from 'react';
import styles from './styles';

class AppGuide extends React.Component {
  state = {
    visible: true,
  };

  onClick = () => this.setState({ visible: false }, this.props.onClick);

  render() {
    if (this.state.visible) {
      return (
        <div onClick={this.onClick} style={styles.guideWrapper}>
          <span style={styles.buttonLeft}>별로야</span>
          <span style={styles.buttonRight}>좋아</span>
          <span style={styles.buttonTop}>딱 내 스타일</span>
          <span style={styles.message}>마음이 가는대로 스와이프 해보세요</span>
        </div>
      );
    }
    return null;
  }
}

export default AppGuide;
