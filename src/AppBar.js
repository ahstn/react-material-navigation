import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon, children } = this.props;

    return (
      <header className='appbar' style={[ styles.appbar ]}>
        <div className='appbar-nav-button' style={[ styles.content, styles.button ]}>
          <i className='material-icons'>{ icon }</i>
        </div>
        <div className='appbar-title' style={[ styles.content, styles.title ]}>
          <h1>{ title}</h1>
        </div>
        { children }
      </header>
    );
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

var styles = {
  base: {
    alignContent: 'center',
    backgroundColor: '#2A3B4C',
    display: 'flex',
    height: '65px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 9
  },
  content: {
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
    justifyContent: 'center',
    padding: '0.45rem'
  },
  button: {
    cursor: 'pointer',
    width: '3.5rem'
  },
  title: {
    marginRight: 'auto'
  }
}
AppBar = Radium(AppBar);
export default AppBar;
