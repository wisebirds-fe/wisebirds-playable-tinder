import React from 'react';

const cardStyles = {
  display: 'flex',
  position: 'absolute',
  top: '60px',
  bottom: '110px',
  borderRadius: 10,
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  //alignItems: 'center',
  justifyContent: 'center',
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
