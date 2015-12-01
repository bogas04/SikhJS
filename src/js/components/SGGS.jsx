const React = require('react');
const Component = React.Component;

const mdLoad = require(__dirname + '/../mdLoad');
class SGGS extends Component {
  constructor (props) {
    super (props);
  }
  componentWillUnmount() {
    document.getElementById('sggs').innerHTML = '';
      document.getElementById('sggs').style.display = 'none';
  }
  componentDidMount() {
    mdLoad.file(__dirname + '/../../../docs/SGGS.md')
    .then(t => {
      //TODO: Huge file can't be set as state!
      document.getElementById('sggs').innerHTML = t;
      document.getElementById('sggs').style.display = 'block';
    });
  }
  render () {
    return (<div></div>);
  }
}

module.exports = SGGS;
