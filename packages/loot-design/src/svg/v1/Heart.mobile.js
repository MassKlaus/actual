import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHeart = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgHeart;
