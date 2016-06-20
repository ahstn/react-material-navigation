export default {
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
  adjacent: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px'
  },
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
  content: {
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
    justifyContent: 'center',
    padding: '.45rem'
  },
  button: {
    cursor: 'pointer',
    width: '3.5rem',

    ':hover': {
      backgroundColor: '#33485C'
    }
  },
  title: {
    marginRight: 'auto'
  },

  span: {
    margin: '0 .25rem'
  },

  i: {
    width: '1.5rem'
  }
};
