import React, { Component } from 'react';

import { AppBar, AppBarItem, SideBar, SideBarItem } from '../lib';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: true };

    // Components using ES6 classes don't autobind 'this' to non React methods
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          title='Futie'
          icon='menu'
          onMenuClick={ this.handleToggle }>
          <AppBarItem title='Search' icon='search' />
          <AppBarItem icon='settings' />
          <AppBarItem icon='more_vert' />
        </AppBar>
        <SideBar open={ this.state.open } theme='dark'>
          <SideBarItem title='Item 1 - With Subset' icon='star'>
            <SideBarItem title='Sub Item 1' route='#' />
            <SideBarItem title='Sub Item 2' route='#' />
            <SideBarItem title='Sub Item 3' route='#' />
            <SideBarItem title='Sub Item 4' route='#' />
            <SideBarItem title='Sub Item 5' route='#' />
          </SideBarItem>
          <SideBarItem title='Item 2 - No Icon' />
        </SideBar>
      </div>
    );
  }
}

export default App;
