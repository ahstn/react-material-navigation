import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, icon, route, children } = this.props;
    const { open } = this.state;

    if (route) {
      return (
        <div className='sidebar-item' style={[ styles.base ]}>
          <Link to={ route } style={[ styles.a ]}>
            <i className="material-icons">{ icon }</i>
            { title }
          </Link>
        </div>
      );
    } else {
      return (
        <div className='sidebar-item' style={[ styles.base ]}>
          <a a onClick={ this.handleClick }>
            <i className="material-icons">{ icon }</i>
            { title }
            { children &&
              <i className='material-icons'>arrow_drop_down</i> }
          </a>
          { open && children }
        </div>
      );
    }
  }
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  route: PropTypes.string
};

var styles = {
  base: {
    '.sidebar-item a': {
      paddingLeft: '2.75rem',
    }
  },

  a: {
  alignContent: 'center',
  color: '#444',
  cursor: 'pointer',
  display: 'flex',
  padding: '.75rem',

    i: {
      alignSelf: 'center',
      fontSize: '1.25rem',
      marginRight: '.75rem',
      ':nth-of-type(2)': {
          alignContent: 'flex-end',
          marginRight: 0
      }
    },
    span: {
      alignSelf: 'center',
      fontSize: '1.1rem',
      marginRight: 'auto'
    },

    ':hover': {
      background: 'rgba(0, 0, 0, .1)'
    },
    ':visited': {
      color: '#444'
    }
  }
};

SideBarItem = Radium(SideBarItem);
export default SideBarItem;
