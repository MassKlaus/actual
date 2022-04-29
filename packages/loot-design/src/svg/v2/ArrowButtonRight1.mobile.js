import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgArrowButtonRight1 = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M13.584 12a2.643 2.643 0 0 1-.775 1.875l-9.541 9.541a1.768 1.768 0 0 1-2.5-2.5l8.739-8.739a.25.25 0 0 0 0-.354L.768 3.084a1.768 1.768 0 0 1 2.5-2.5l9.541 9.541A2.643 2.643 0 0 1 13.584 12z"
      fill="currentColor"
    />
    <Path
      d="M23.75 12a2.643 2.643 0 0 1-.775 1.875l-9.541 9.541a1.768 1.768 0 0 1-2.5-2.5l8.739-8.739a.25.25 0 0 0 0-.354l-8.739-8.739a1.768 1.768 0 0 1 2.5-2.5l9.541 9.541A2.643 2.643 0 0 1 23.75 12z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgArrowButtonRight1;
