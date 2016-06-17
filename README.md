# react-material-navigation
React implementation of Material Design's Navigation Drawer and Toolbar.

**Currently in development** and unstable, see [futie](https://github.com/phazyy/futie/blob/master/src/containers/App.js) for implementation.

I develop with Chromium so other browser support will be shakey (to say the least), until I have a stable version.

![preview](http://i.imgur.com/Garcn2W.png)

## Todo
* Add color customisation
* Separate AppBar and SideBar into their own sub-folders
* General refactoring (mainly SideBarItem.js)
* Add animation and click effects
* Allow the AppBar to either overlay the SideBar or not
* Write docs when at a stable version

## Implementation
Firstly install the npm package
```bash
$ npm i -S react-material-navigation
```
Require the components in your React application
```javascript
import { AppBar, AppBarItem, SideBar, SideBarItem } from 'react-material-navigation';
```
