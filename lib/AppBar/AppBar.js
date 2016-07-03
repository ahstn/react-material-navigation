import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from './styles';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon, color, overlay, children, onMenuClick } = this.props;

    return (
      <header className='appbar'
        style={[ styles.base, styles[color], overlay ? null : styles.adjacent ]}>
        <div className='appbar-nav-button'
          style={[ styles.content, styles.button ]}
          onClick={ onMenuClick }>
          <i className='material-icons'>{ icon }</i>
        </div>
        <div className='appbar-title' style={[ styles.content, styles.title ]}>
          <h1>{ title }</h1>
        </div>
        { children }
      </header>
    );
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf([ 'red', 'green', 'teal', 'blue', 'purple']),
  overlay: PropTypes.bool,
  onMenuClick: PropTypes.func
};

AppBar.defaultProps = {
  color: 'teal',
  overlay: true
}

AppBar = Radium(AppBar);
export default AppBar;
