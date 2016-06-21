import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import Radium, { Plugins, StyleRoot } from 'radium';
import styles from './styles';

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
        <div>
          <StyleRoot>
            <RLink to={ route } style={[ styles.a ]}>
              { icon && (
                <i className="material-icons" style={[ styles.i ]}>
                  { icon }
                </i>
              )}
              { icon && (
                <span style={[ styles.titleIcon ]}>
                  { title }
                </span>
              )}
              { !icon && (
                <span style={[ styles.title ]}>
                  { title }
                </span>
              )}
            </RLink>
          </StyleRoot>
        </div>
      );
    } else {
      return (
        <div>
          <StyleRoot>
            <a a onClick={ this.handleClick } style={[ styles.a ]}>
              { icon && (
                <i className="material-icons" style={[ styles.i ]}>
                  { icon }
                </i>
              )}
              { icon && (
                <span style={[ styles.titleIcon ]}>
                  { title }
                </span>
              )}
              { !icon && (
                <span style={[ styles.title ]}>
                  { title }
                </span>
              )}
              { children &&
                <i className='material-icons'
                  style={[ styles.i, styles.arrow ]}>
                  arrow_drop_down
                </i>
              }
            </a>
          </StyleRoot>
          { open &&
            (<div style={[ styles.nested, styles[theme] ]}>{ children }</div>
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
