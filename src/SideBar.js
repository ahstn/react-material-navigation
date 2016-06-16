import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, children } = this.props;
    if (!open) { return null; }

    return (
      <aside className="sidebar" style={[ styles.base ]}>
        { children }
      </aside>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool
};

var styles = {
  base: {
    boxShadow: '0 1px 6px rgba(0, 0, 0,.12), 0 1px 4px rgba(0, 0, 0, .12)',
    backgroundColor: '$sidebar-color',
    color: '#444',
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    minWidth: '240px',
    maxWidth: '240px',
    position: 'fixed',
    top: '65px',
    width: '$sidebar-width',
    zIndex: 5
  }
}

SideBar = Radium(SideBar);
export default SideBar;
