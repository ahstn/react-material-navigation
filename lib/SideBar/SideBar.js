import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Radium from 'radium';
import styles from './styles';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, theme, overlay, children } = this.props;
    let childrenWithProps = Children.map(children, (child) => {
      return cloneElement(child, { theme: theme });
    });
    let sidebarStyle = [
      styles.base,
      styles[theme],
      overlay ? null : styles.adjacent,
      open ? null : styles.hidden
    ];

    return (
      <aside className="sidebar"
        style={ sidebarStyle }>
        { childrenWithProps }
      </aside>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
  overlay: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark'])
};

SideBar.defaultProps = {
  overlay: true,
  theme: 'light'
};

SideBar = Radium(SideBar);
export default SideBar;
