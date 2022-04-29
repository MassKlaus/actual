import React from 'react';

class AnimateIn extends React.Component {
  state = { animating: false };

  componentDidMount() {
    setTimeout(() => this.setState({ animating: true }), this.props.delay || 0);
  }

  render() {
    const { children } = this.props;
    return children(this.state.animating);
  }
}

export default AnimateIn;
