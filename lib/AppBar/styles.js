export default {
  // Component Base Styles
  base: {
    alignContent: 'center',
    display: 'flex',
    height: '65px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 9
  },
  adjacent: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px'
  },
  content: {
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
    justifyContent: 'center',
    padding: '.45rem'
  },
  title: {
    marginRight: 'auto'
  },
  titleHeading: {
    fontSize: '1.5rem',
    fontWeight: 500
  },

  // Theme Styles
  red: {
    backgroundColor: '#F44336',
  },
  green: {
    backgroundColor: '#4CAF50',
  },
  teal: {
    backgroundColor: '#2A3B4C',
  },
  blue: {
    backgroundColor: '#2196F3',
  },
  purple: {
    backgroundColor: '#673AB7',
  },
  orange: {
    backgroundColor: '#FF5722',
  },

  // AppBar Item Styles
  item: {
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
  button: {
    cursor: 'pointer',
    width: '3.5rem',

    ':hover': {
      backgroundColor: '#33485C'
    }
  },
  span: {
    margin: '0 .25rem'
  },

  i: {
    width: '1.5rem'
  }
};
