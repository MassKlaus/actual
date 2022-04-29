import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBrowserWindow = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgBrowserWindow;
