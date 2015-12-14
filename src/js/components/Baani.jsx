const React = require('react');
const Component = React.Component;
const fs = require('fs');
const ReactMarkdown = require('react-markdown');

class Baani extends Component {
  constructor (props) {
    super (props);
    this.state = {
      file: ""
    };
  }
  componentDidMount() {
    let baanies = require('../baanies');
    const baaniLocation = b => __dirname + '/../../../docs/' + b + '.md';

    if (baanies.nitnem.indexOf(this.props.params.baani) > -1
    || baanies.others.indexOf(this.props.params.baani) > -1 ) {
      fs.readFile(baaniLocation(this.props.params.baani), 'utf8', (err, file) => {
        this.setState({ file });
      });
    } else {
      this.setState({ file: this.props.params.baani + " Not Available" });
    }
  }
  render () {
    return (<ReactMarkdown className="gurbani-text" source={this.state.file} />);
  }
}

module.exports = Baani;
