import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPin = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgPin;
