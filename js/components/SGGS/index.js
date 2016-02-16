import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import ReactMarkdown from 'react-markdown';
//import fs from 'fs';

export default class SGGS extends Component {
  constructor (props) {
    super (props);
    this.state = { currentSet: '000' };
    this.options = Array(143).fill(0).map((e, i) => (<option 
      value = {this.setNumberToString(i)}
      key = {i} >
      {i*10 + 1}-{(i + 1)*10} Angs
    </option>));
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

    return (
      <div>
        <h1> Sri Guru Granth Sahib </h1>
        <form className = 'form-inline'>
          <button className = 'btn btn-default' onClick = {e => this.updateSetBy(-1)}>Previous Set</button>
          <select className = 'form-control' onChange = {e => this.changeSet(e.currentTarget.value)}>
            <option value = ''> Select Ang Set </option>
            {this.options}
          </select>
          <button className = 'btn btn-default' onClick = {e => this.updateSetBy(1)}>Next Set</button>
        </form>
        <div className = 'gurbani-text' >
          //<ReactMarkdown source = ""/>
        </div>
        <button className = 'btn btn-primary' onClick = {e => this.updateSetBy(-1)}>&lt;</button>
        <button className = 'btn btn-primary' onClick = {e => this.updateSetBy(1)}>&gt;</button>
      </div>
    );
    // source =  {fs.readFileSync(__dirname + '/../../../docs/SGGS/SGGS_' + this.state.currentSet + '.md', 'utf-8')} />
  }
}
