const React = require('react');
const Component = React.Component;
const fs = require('fs');
const ReactMarkdown = require('react-markdown');

class About extends Component {
  constructor (props) {
    super (props);
    this.state = {
      file: ""
    };
  }
  componentDidMount() {
    fs.readFile(__dirname + '/../../../README.md', 'utf8', (err, file) => {
      this.setState({file});
    });
  }
  render () {
    return (<ReactMarkdown className = "text-left" source = {this.state.file} />);
  }
}

module.exports = About;
