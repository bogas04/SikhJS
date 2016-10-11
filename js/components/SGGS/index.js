import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Throttle } from 'react-throttle';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class SGGS extends Component {
  constructor (props) {
    super (props);
    let { ang = 1 } = this.props.params || { };
    this.state = { lines: [], ang, larivaar: false, showTranslation: false, showAngForm: false };
    this.updateLines();
  }
  setAng(ang) {
    if (ang) {
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });
    }
  }
  incrementAng() { this.setAng(this.state.ang + 1); } 
  decrementAng() { this.setAng(this.state.ang - 1); } 
  updateLines(ang = this.state.ang) {
    return fetch(`http://api.sikher.com/page/${ang}`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }
  showAngForm() { this.setState({ showAngForm: true }); }
  toggleLarivaar() { this.setState({ larivaar: !this.state.larivaar }); }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
  hideAngForm() { this.setState({ showAngForm: false }); }
  render () {
    const MAX_ANG = 1430, MIN_ANG = 1;
    const { showAngForm, lines, ang, larivaar, showTranslation } = this.state;

    const angContent = lines.map(({ id, text, original, translation}) => (
      <div key={id} style={{ display: showTranslation ? 'block' : 'inline' }}>
        {larivaar ? original : ` ${text} `}
        {showTranslation ? <div><small>{translation.text}</small></div> : ''}
      </div>
      ));

      const AngBar = () => <div>
        <h3>
          <button className="btn" disabled={ang === MIN_ANG} onClick={() => this.decrementAng()}>Previous Ang</button>
          <span className="gurbani-text">
            {' Œ '}
            <span
              style={{ display: showAngForm ? 'none' : 'inline' }}
              onClick={e => this.showAngForm()}
              children={ang}
            />
            <Throttle handler="onChange" time="200">
              <input
                hidden={!showAngForm}
                ref={e => e && e.focus()}
                onChange={e => this.setAng(Number(e.target.value))}
                onBlur={e => this.hideAngForm()}
                type="number"
                min={MIN_ANG}
                max={MAX_ANG}
                style={{width: '100px'}}
                className="text-center"
                defaultValue={ang}
              />
            </Throttle>
            {' ‰ '}
          </span>
          <button className="btn" disabled={ang === MAX_ANG} onClick={() => this.incrementAng()}>Next Ang</button>
        </h3>
        <Form inline>
          <FormGroup check>
            <Label check>
              <Input checked={larivaar} type="checkbox" onChange={e => this.toggleLarivaar(e.target.checked)}/>{' '}
              Larivaar
            </Label>
          </FormGroup>
          {' '}
          <FormGroup check>
            <Label check>
              <Input
                checked={showTranslation}
                type="checkbox"
                onChange={e => this.toggleTranslation(e.target.checked)}
              />{' '}
              Translation
            </Label>
          </FormGroup>
        </Form>
      </div>;

      return (
        <div>
          <h1> Sri Guru Granth Sahib </h1>
          <AngBar />
          <div>
            {
            lines.length === 0
            ? 'Loading'
            : <div className="text-lg-left">{angContent}</div>
            }
          </div>
        </div>
        );
  }
}
