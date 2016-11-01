export default {
  wrapper: {
    height: '100vh',
    position: 'relative',
  },
  header: {
    backgroundColor: '#0097a7'
  },
  drawer: nightMode => nightMode ? { backgroundColor: '#212121', color: 'white', borderRight: 'none' } : {},
  color: nightMode => ({ color: nightMode ? 'white' : '' }),
};
