const React = require('react');
const Component = React.Component;

const mdLoad = require(__dirname + '/../mdLoad');
class SGGS extends Component {
  constructor (props) {
    super (props);
    this.state = { loading: true }
  }
  componentWillUnmount() {
    document.getElementById('sggs').innerHTML = '';
    document.getElementById('sggs').style.display = 'none';
  }
  componentDidMount() {
    mdLoad.file(__dirname + '/../../../docs/SGGS.md')
    .then(t => {
      document.getElementById('sggs').innerHTML = t;
      document.getElementById('sggs').style.display = 'block';
      this.setState({ loading: false });
    });
  }
  render () {
    return (<h1>{this.state.loading && 'Loading...'}</h1>);
  }
}
module.exports = SGGS;
