import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBorderNone = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgBorderNone;
