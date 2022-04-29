import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgArrowsExpand3 = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M19.611 2.571h-3.754a1.286 1.286 0 1 1 0-2.571h6.857A1.286 1.286 0 0 1 24 1.286v6.857a1.286 1.286 0 0 1-2.571 0V4.39L15.48 10.34a1.286 1.286 0 0 1-1.817-1.817l5.948-5.95zM1.286 14.571a1.286 1.286 0 0 1 1.285 1.286v3.754l5.949-5.946a1.286 1.286 0 0 1 1.817 1.817L4.39 21.429h3.753a1.285 1.285 0 1 1 0 2.571H1.286A1.286 1.286 0 0 1 0 22.714v-6.857a1.286 1.286 0 0 1 1.286-1.286z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgArrowsExpand3;
