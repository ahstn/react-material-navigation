 import React, { Component, PropTypes } from 'react';
 import Radium from 'radium';

class AppBarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon } = this.props;

    return (
      <div className='appbar-item' style={[ styles.base ]}>
        <i className='material-icons'>{ icon }</i>
        { title && title}
      </div>
    );
  }
}

AppBarItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string
};

var styles = {
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    cursor: 'pointer',
    span: {
      margin: '0 .25rem'
    },
    i: {
      width: '1.5rem'
    },
    ':last-of-type': {
      marginRight: '1.5rem'
    },
    ':hover': {
      backgroundColor: '#33485C'
    }
  }
};

AppBarItem = Radium(AppBarItem);
export default AppBarItem;
