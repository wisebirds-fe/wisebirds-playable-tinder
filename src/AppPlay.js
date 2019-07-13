import * as React from 'react';
import Swipeable from './Swipable';
import Card from './Card';
//import Button from './Button';
import Helpers from './helpers';

/*=== 테스트용 (raw image asset) ===*/
//import assetPhotos from './assets/asset-photos.test.json';
/*=== 배포용 (imported binary image assets) ===*/
import assetPhotos from './assets/asset-photos.json';

import styles from './styles';

const assetPhotoEntries = Object.entries(assetPhotos);

class AppPlay extends React.Component {
  state = {
    currCard: 0,
    restCard: assetPhotoEntries.length,
    cardStatus: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.restCard !== this.state.restCard) {
      if (this.state.restCard <= 0) {
        this.props.onFinish();
      }
    }
  }

  onDragging = (direction) => {
    if (direction === 'left') {
      this.setState({ cardStatus: 'NOPE' });
    } else if (direction === 'right') {
      this.setState({ cardStatus: 'LIKE' });
    } else if (direction === 'top') {
      this.setState({ cardStatus: 'SUPERLIKE' });
    } else {
      this.setState({ cardStatus: null });
    }
  };

  onBeforeSwipe = (onSwipe, onCancel, direction) => {
    if (direction === 'bottom') {
      onCancel();
    } else {
      onSwipe(); // 아래방향이 아니라면 swipe 그대로 진행
    }
  };

  onAfterSwipe = () =>
    this.setState({
      currCard: this.state.currCard + 1,
      restCard: this.state.restCard - 1,
      cardStatus: null,
    });

  onCancelSwipe = () => this.setState({ cardStatus: null });

  renderCardContent = (photoEntry, cardStatus = null, isSwiping = false) => {
    return (
      <>
        <span style={{
          ...styles.content,
          backgroundImage: Helpers.getAssetData(photoEntry),
          boxShadow: isSwiping ? 'rgba(0, 0, 0, .4) 0px 1px 4px 1px' : null,
        }}/>
        {cardStatus === 'NOPE' ?
          <span style={{ ...styles.cardStatus, ...styles.cardStatusNope }}>NOPE</span>
          : null
        }
        {cardStatus === 'LIKE' ?
          <span style={{ ...styles.cardStatus, ...styles.cardStatusLike }}>LIKE</span>
          : null
        }
        {cardStatus === 'SUPERLIKE' ?
          <span style={{ ...styles.cardStatus, ...styles.cardStatusSuperLike }}>SUPER LIKE</span>
          : null
        }
      </>
    );
  };

  render() {
    return this.state.restCard > 0 ? (
      <div style={styles.playWrapper}>
        <Swipeable
          //buttons={({ right, left, top, bottom }) => (
          //  <div style={styles.actions}>
          //    <Button onClick={left}>Nope</Button>
          //    <Button onClick={right}>Like</Button>
          //    <Button onClick={top}>SuperLike</Button>
          //    <Button onClick={bottom}>???</Button>
          //  </div>
          //)}
          onDragging={this.onDragging}
          onBeforeSwipe={this.onBeforeSwipe}
          onAfterSwipe={this.onAfterSwipe}
          onCancelSwipe={this.onCancelSwipe}
        >
          <Card>
            {this.renderCardContent(assetPhotoEntries[ this.state.currCard ][ 1 ], this.state.cardStatus, true)}
          </Card>
        </Swipeable>
        {this.state.restCard > 1 ?
          <Card zIndex={-1}>
            {this.renderCardContent(assetPhotoEntries[ this.state.currCard + 1 ][ 1 ])}
          </Card>
          :
          <Card zIndex={-2}>
            {/* 처음 이미지 노출 */}
            {this.renderCardContent(assetPhotoEntries[ 0 ][ 1 ])}
          </Card>
        }
      </div>
    ) : (
      <div style={styles.playWrapper}>
        <Card zIndex={-2}>
          {/* 처음 이미지 노출 */}
          {this.renderCardContent(assetPhotoEntries[ 0 ][ 1 ])}
        </Card>
      </div>
    );
  }
}

export default AppPlay;
