export default {
  // Component Base Styles
  base: {
    boxShadow: '0 1px 6px rgba(0, 0, 0,.12), 0 1px 4px rgba(0, 0, 0, .12)',
    color: '#444',
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    minWidth: '240px',
    maxWidth: '240px',
    position: 'fixed',
    top: '65px',
    width: '240px',
    left: 0,
    zIndex: 5,
    transition: 'all 0.4s ease 0s'
  },
  adjacent: {
    top: 0
  },
  header: {
    width: '100%',
    padding: '1rem'
  },
  hidden: {
    left: '-240px',
    transition: 'all 0.4s ease 0s'
  },

  // Theme Styles
  light: {
    backgroundColor: 'white'
  },
  dark: {
    background: '#29292F',
    color: '#DEDEDE'
  },

  // SideBar Header Styles
  img: {
    float: 'left',
    marginRight: '.75rem'
  },
  h1: {
    fontSize: '18px',
    margin: '.5rem 0'
  },
  h2: {
    fontSize: '14px',
    margin: 0
  },

  // SideBar Item Styles
  nested: {
    paddingLeft: '2rem'
  },

  a: {
    alignContent: 'center',
    color: 'inherit',
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
    color: 'inherit',
    marginRight: 'auto'
  },
  title: {
    color: 'inherit',
    marginRight: 'auto',
    paddingLeft: '2.1rem'
  },

  i: {
    alignSelf: 'center',
    color: 'inherit',
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
