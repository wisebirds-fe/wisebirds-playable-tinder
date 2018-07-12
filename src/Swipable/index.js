import React, { PureComponent, Fragment } from 'react';
import { Spring } from 'react-spring';
import {
  getDirection,
  //getOpacity,
  getOffset,
  withPos,
  getLimitOffsetX,
  getLimitOffsetY,
} from './helpers';

const SWIPE_CONFIG = {
  tension: 390,
  friction: 30,
  restSpeedThreshold: 1,
  restDisplacementThreshold: 0.01,
  overshootClamping: true,
  lastVelocity: 1,
  mass: 0.1,
};

const DEFAULT_PROPS = {
  limitX: 120,
  limitY: 120,
  min: 40,
};

const INITIAL_STATE = {
  startX: 0,
  startY: 0,
  offsetX: 0,
  offsetY: 0,
  forced: false,
  swiped: false,
  moving: false,
  pristine: true,
};

export default class Swipeable extends PureComponent {
  static defaultProps = DEFAULT_PROPS;

  state = INITIAL_STATE;

  componentDidMount() {
    window.addEventListener('touchmove', this.onDragMove);
    window.addEventListener('mousemove', this.onDragMove);
    window.addEventListener('touchend', this.onDragEnd);
    window.addEventListener('mouseup', this.onDragEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('touchmove', this.onDragMove);
    window.removeEventListener('mousemove', this.onDragMove);
    window.removeEventListener('touchend', this.onDragEnd);
    window.removeEventListener('mouseup', this.onDragEnd);
  }

  onDragStart = withPos((startX, startY) => {
    if (!this.state.swiped) {
      this.setState({ startX, startY, pristine: false, moving: true });
    }
  });

  onDragMove = withPos((endX, endY) => {
    const { startX, startY, swiped, moving } = this.state;
    const { limitX, limitY, onDragging } = this.props;

    if (swiped || !moving) {
      return;
    }

    const offsetX = getOffset(startX, endX);
    const offsetY = getOffset(startY, endY);

    if (onDragging) {
      setTimeout(onDragging(getDirection(offsetX, offsetY, limitX, limitY)), 0);
    }

    this.setState({ offsetX, offsetY });
  });

  onDragEnd = () => {
    const { offsetX, offsetY, swiped, moving } = this.state;
    const { limitX, limitY } = this.props;

    if (swiped || !moving) {
      return;
    }

    if ((Math.abs(offsetX) >= limitX) || (Math.abs(offsetY) >= limitY)) {
      this.onBeforeSwipe(getDirection(offsetX, offsetY, limitX, limitY));
    } else {
      this.onCancelSwipe();
    }
  };

  onCancelSwipe = () => {
    this.setState({ startX: 0, startY: 0, offsetX: 0, offsetY: 0, moving: false }, () => {
      if (this.props.onCancelSwipe) {
        this.props.onCancelSwipe();
      }
    });
  };

  onBeforeSwipe = (direction) => {
    const { onBeforeSwipe } = this.props;

    if (onBeforeSwipe) {
      onBeforeSwipe(
        (_direction) => this.onSwipe(_direction || direction),
        this.onCancelSwipe,
        direction,
      );
    } else {
      this.onSwipe(direction);
    }
  };

  onSwipe = (direction) => {
    const { limitX, limitY, onSwipe } = this.props;

    if (onSwipe) {
      onSwipe(direction);
    }

    this.setState({
      swiped: true,
      moving: false,
      offsetX: getLimitOffsetX(limitX, direction),
      offsetY: getLimitOffsetY(limitY, direction),
    });
  };

  onAfterSwipe = () => {
    const { onAfterSwipe } = this.props;

    this.setState(INITIAL_STATE);

    if (onAfterSwipe) {
      onAfterSwipe();
    }
  };

  forceSwipe = (direction) => {
    if (this.state.swiped) {
      return;
    }

    this.setState({
      pristine: false,
      forced: true,
    });

    this.onBeforeSwipe(direction);
  };

  render() {
    const { offsetX, offsetY, swiped, pristine, forced } = this.state;
    const { children, limitX, limitY, buttons, /*min*/ } = this.props;
    //const direction = getDirection(offsetX, offsetY, limitX, limitY);
    //const opacity = [ 'top', 'bottom' ].indexOf(direction) !== -1 ?
    //  getOpacity(offsetY, limitY, min) : getOpacity(offsetX, limitX, min);

    return (
      <Fragment>
        <Spring
          from={{ offsetX: 0, offsetY: 0, opacity: 1 }}
          to={{ offsetX, offsetY, /*opacity*/ }}
          onRest={() => swiped && this.onAfterSwipe()}
          immediate={pristine || (!forced && (Math.abs(offsetX) >= limitX || Math.abs(offsetY) >= limitY))}
          config={SWIPE_CONFIG}
        >
          {({ offset, opacity }) => (
            <div
              style={{
                opacity,
                transform: `translate(${offsetX}px, ${offsetY}px) rotate(${-offsetX / 10}deg)`,
                height: '100%',
                width: '100%',
              }}
              onMouseDown={this.onDragStart}
              onTouchStart={this.onDragStart}
            >
              {children}
            </div>
          )}
        </Spring>
        {buttons &&
        buttons({
          right: () => this.forceSwipe('right'),
          left: () => this.forceSwipe('left'),
          top: () => this.forceSwipe('top'),
          bottom: () => this.forceSwipe('bottom'),
        })}
      </Fragment>
    );
  }
}
