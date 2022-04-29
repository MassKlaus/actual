import React from 'react';

const SvgQueue = props => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgQueue;
