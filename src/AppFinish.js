import React, { Component } from 'react';
import styles from './styles';

class AppFinish extends Component {
  onClick = () => {
    // 페이스북 플레이어블 앱 등록을 위해 CTA버튼 클릭시 FbPlayableAd.onCTAClick()를 반드시 호출해야 함.
    window.FbPlayableAd && window.FbPlayableAd.onCTAClick();

    setTimeout(() => {
      window.location.href = 'http://bit.ly/SeungriSwipe';
    }, 1000);
  };

  render() {
    return (
      <div style={styles.finishWrapper}>
        <button onClick={this.onClick} style={styles.linkButton}>더 많은 매치 찾아보기</button>
      </div>
    );
  }
}

export default AppFinish;
