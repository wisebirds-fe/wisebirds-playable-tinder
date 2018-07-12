export const getDirection = (offsetX, offsetY, limitX, limitY) => {
  if (offsetX !== 0 || offsetY !== 0) {
    if (offsetX > limitX && (offsetX > offsetY)) {
      return 'right';
    } else if (offsetX <= -limitX && (-offsetX > Math.abs(offsetY))) {
      return 'left';
    } else if (offsetY > limitY && (offsetY > offsetX)) {
      return 'bottom';
    } else if (offsetY <= -limitY && (-offsetY > Math.abs(offsetX))) {
      return 'top';
    }
  }
  return null;
};
export const getOffset = (start, end) => -((start - end) * 0.75);
export const getEvent = e => (e.touches ? e.touches[0] : e);
export const withPos = fn => e => fn(getEvent(e).pageX, getEvent(e).pageY);
export const getLimitOffsetX = (limit, direction) => (direction === 'right' ? limit : -limit);
export const getLimitOffsetY = (limit, direction) => (direction === 'bottom' ? limit : -limit);
export const getOpacity = (offset, limit, min) =>
  1 -
  (Math.abs(offset) < min
    ? 0
    : (Math.abs(offset) - min) / Math.abs(limit - min));
