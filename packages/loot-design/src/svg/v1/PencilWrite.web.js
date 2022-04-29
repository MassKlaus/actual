import React from 'react';

const SvgPencilWrite = props => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      d="M13.937 15a1.977 1.977 0 0 1-.672.443L9.73 16.86a2.026 2.026 0 0 1-2.157-.442 2 2 0 0 1-.443-2.157l1.413-3.533a2.008 2.008 0 0 1 .444-.673l5.887-5.888a.251.251 0 0 0-.174-.427H3.368A3.118 3.118 0 0 0 .25 6.858v13.765a3.117 3.117 0 0 0 3.118 3.117h13.765a3.116 3.116 0 0 0 3.117-3.117V9.294a.25.25 0 0 0-.426-.177z"
      fill="currentColor"
    />
    <path
      d="M18.568 3.3a.514.514 0 0 0-.707 0l-7.813 7.814a.507.507 0 0 0-.111.168l-1.414 3.536a.5.5 0 0 0 .111.54.519.519 0 0 0 .539.11l3.535-1.414a.5.5 0 0 0 .168-.111L20.69 6.13a.5.5 0 0 0 0-.707zM23.165 3.654a2 2 0 0 0 0-2.828 2.048 2.048 0 0 0-2.828 0l-1.061 1.061a.531.531 0 0 0-.042.063.49.49 0 0 0-.105.29.5.5 0 0 0 .147.354L21.4 4.715a.483.483 0 0 0 .649.039.452.452 0 0 0 .058-.039z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPencilWrite;
