import * as React from 'react';

const buttonStyles = {
  padding: '8px 16px',
  background: 'whitesmoke',
  cursor: 'pointer',
  border: 'none',
  borderRadius: 3,
};

export default ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>{children}</button>
);
