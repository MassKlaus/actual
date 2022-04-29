import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgReports = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M19 18h-1v-8c0-.6-.4-1-1-1s-1 .4-1 1v8h-3V1c0-.6-.4-1-1-1s-1 .4-1 1v17H8V7c0-.6-.4-1-1-1s-1 .4-1 1v11H3V3c0-.6-.4-1-1-1s-1 .4-1 1v15c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgReports;
