 import React, { Component, PropTypes } from 'react';
 import Radium from 'radium';

class AppBarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon } = this.props;

    return (
      <div className='appbar-item' style={[ styles.content, styles.base ]}>
        <i className='material-icons' style={[ styles.content, styles.i ]}>{ icon }</i>
        { title && (<span style={[ styles.content, styles.span ]}>{ title }</span>)}
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

    ':lastOfType': {
      marginRight: '1.5rem'
    },
    ':hover': {
      backgroundColor: '#33485C'
    }
  },

  content: {
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
    justifyContent: 'center',
    padding: '.45rem'
  },

  span: {
    margin: '0 .25rem'
  },

  i: {
    width: '1.5rem'
  },
};

AppBarItem = Radium(AppBarItem);
export default AppBarItem;
