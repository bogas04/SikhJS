const React = require('react');
const Component = React.Component;
const fs = require('fs');
const ReactMarkdown = require('react-markdown');

class About extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (<ReactMarkdown
      style = {{ fontSize: '100% !important' }}
      className = "text-left"
      source = {fs.readFileSync(__dirname + '/../../../README.md', 'utf8')}
    />);
  }
}

module.exports = About;
