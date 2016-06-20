import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Radium from 'radium';
import styles from './SideBarStyles';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, theme, overlay, children } = this.props;
    let childrenWithProps = Children.map(children, (child) => {
      return cloneElement(child, { theme: theme });
    });
    if (!open) { return null; }


    return (
      <aside className="sidebar"
        style={[ styles.base, styles[theme], overlay ? null : styles.adjacent ]}>
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
