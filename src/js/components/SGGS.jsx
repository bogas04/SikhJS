const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const ReactMarkdown = require('react-markdown');
const fs = require('fs');

class SGGS extends Component {
  constructor (props) {
    super (props);
    this.state = { currentSet: '000' };
  }
  updateSetBy(value) {
    let cs = this.state.currentSet;
    cs = parseInt(cs) + value;
    cs = this.setNumberToString(cs);
    this.changeSet(
      this.setNumberToString(
        parseInt(this.state.currentSet) + value 
      )
    );
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }
  setNumberToString(setNumber) {
    return ('000' + setNumber).slice(-3);
  }
  changeSet(newSet) {
    this.setState( { currentSet: newSet || this.state.currentSet } );
  } 
  render () {
    let options = Array(143).fill(0).map((e, i) => (<option 
      value = {this.setNumberToString(i)}
      key = {i} >
      {i*10 + 1}-{(i + 1)*10} Angs
    </option>));

    return (
      <div>
        <h1> Sri Guru Granth Sahib </h1>
        <form className = 'form-inline'>
          <button className = 'btn btn-default' onClick = {e => this.updateSetBy(-1)}>Previous Set</button>
          <select className = 'form-control' onChange = {e => this.changeSet(e.currentTarget.value)}>
            <option value = ''> Select Ang Set </option>
            {options}
          </select>
          <button className = 'btn btn-default' onClick = {e => this.updateSetBy(1)}>Next Set</button>
        </form>
        <div className = 'gurbani-text' >
          <ReactMarkdown 
            source =  {fs.readFileSync(__dirname + '/../../../docs/SGGS/SGGS_' + this.state.currentSet + '.md', 'utf-8')} />
        </div>
        <button className = 'btn btn-primary' onClick = {e => this.updateSetBy(-1)}>&lt;</button>
        <button className = 'btn btn-primary' onClick = {e => this.updateSetBy(1)}>&gt;</button>
      </div>
    );
  }
}
module.exports = SGGS;
