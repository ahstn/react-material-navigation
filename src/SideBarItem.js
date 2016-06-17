import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import Radium, { Plugins, StyleRoot } from 'radium';

var RLink = Radium(Link);
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
    const { title, icon, route, theme, children } = this.props;
    const { open } = this.state;

    if (route) {
      return (
        <div style={[ styles.base ]}>
          <StyleRoot>
            <RLink to={ route } style={[ styles.a ]}>
              { icon && (
                <i className="material-icons"
                  style={[ styles.i, styles[theme] ]}>
                  { icon }
                </i>
              )}
              { icon && (
                <span style={[ styles.titleIcon, styles[theme] ]}>
                  { title }
                </span>
              )}
              { !icon && (
                <span style={[ styles.title, styles[theme] ]}>
                  { title }
                </span>
              )}
            </RLink>
          </StyleRoot>
        </div>
      );
    } else {
      return (
        <div style={[ styles.base ]}>
          <StyleRoot>
            <a a onClick={ this.handleClick } style={[ styles.a ]}>
              { icon && (
                <i className="material-icons"
                  style={[ styles.i, styles[theme] ]}>
                  { icon }
                </i>
              )}
              { icon && (
                <span style={[ styles.titleIcon, styles[theme] ]}>
                  { title }
                </span>
              )}
              { !icon && (
                <span style={[ styles.title, styles[theme] ]}>
                  { title }
                </span>
              )}
              { children &&
                <i className='material-icons'
                  style={[ styles.i, styles.arrow, styles[theme] ]}>
                  arrow_drop_down
                </i>
              }
            </a>
          </StyleRoot>
          { open &&
            (<div style={[ styles.nested ]}>{ children }</div>
          )}
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

  },
  nested: {
    paddingLeft: '2rem'
  },

  a: {
    alignContent: 'center',
    color: '#444',
    cursor: 'pointer',
    display: 'flex',
    padding: '.75rem',

    ':hover': {
      background: 'rgba(0, 0, 0, .1)'
    },
    ':visited': {
      color: '#444'
    }
  },

  titleIcon: {
    marginRight: 'auto'
  },
  title: {
    marginRight: 'auto',
    paddingLeft: '2.1rem'
  },
  dark: {
    color: '#DEDEDE'
  },

  i: {
    alignSelf: 'center',
    fontSize: '1.25rem',
    marginRight: '.75rem'
  },
  arrow: {
    alignContent: 'flex-end',
    marginRight: 0
  },

  span: {
    alignSelf: 'center',
    fontSize: '1.1rem',
    marginRight: 'auto'
  }
};

function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Plugins.checkProps,
      Plugins.mergeStyleArray,
      Plugins.resolveInteractionStyles,
      Plugins.resolveMediaQueries,
      Plugins.prefix,
      Plugins.visited
    ]
  })(component);
}

SideBarItem = ConfiguredRadium(SideBarItem);
export default SideBarItem;
