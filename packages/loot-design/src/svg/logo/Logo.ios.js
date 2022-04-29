import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLogo = props => (
  <Svg
    {...props}
    width={30}
    height={32}
    fill="none"
    style={{
      color: "#242134",
      ...props.style
    }}
  >
    <Path
      d="M1.138 30.423l13.8-29.309a.32.32 0 0 1 .289-.184h.605a.32.32 0 0 1 .287.18l8.903 18.29 2.791-1.074a.32.32 0 0 1 .414.184l.742 1.932a.32.32 0 0 1-.183.413l-2.574.99 3.175 6.524a.32.32 0 0 1-.147.428l-1.861.905a.32.32 0 0 1-.428-.147l-3.277-6.733-21.98 8.453a.32.32 0 0 1-.415-.189l-.152-.418a.32.32 0 0 1 .01-.245zM15.56 6.152L5.85 26.774l16.634-6.398L15.56 6.152z"
      fill="currentColor"
    />
    <Path
      d="M21.777 14.568l.932 2.544-21.203 7.775a.32.32 0 0 1-.41-.19l-.713-1.944a.32.32 0 0 1 .19-.41l21.204-7.775z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgLogo;
