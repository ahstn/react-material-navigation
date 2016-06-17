import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from './AppBarStyles';

class AppBarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon } = this.props;

    return (
      <div className='appbar-item' style={[ styles.content, styles.item ]}>
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

AppBarItem = Radium(AppBarItem);
export default AppBarItem;
