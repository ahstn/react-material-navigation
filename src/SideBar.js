import React, { Component, PropTypes } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, children } = this.props;

    return (
      <aside className="sidebar">
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

export default SideBar;
