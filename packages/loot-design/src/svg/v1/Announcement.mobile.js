import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAnnouncement = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgAnnouncement;
