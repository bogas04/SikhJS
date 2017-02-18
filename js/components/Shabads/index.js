import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, } from 'react-mdl';

import Toolbar from '../Toolbar'; 
import Khajana, { TYPES, SOURCES } from '../Khajana'; 
import Card from '../Card';

const styles = {
  select: { width: 300, textOverflow: 'ellipsis', overflow: 'hidden' },
  results: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' },
  capitalize: { textTransform: 'capitalize' },
  field: { width: 300, color: 'white' },
};

export const SearchCard = withRouter(props => {
  const { id, transliteration, writer, translation, gurbani, shabadid, source, router: { push }} = props;

  return <Card
    title={<span className="gurbani-text">{gurbani.gurmukhi}</span>}
    text={<span style={styles.capitalize}>{transliteration}</span>}
    actions={[
      <Button onClick={e => push(`/shabad/${shabadid}`)}>Open Shabad</Button>,
      <Button onClick={e => push(`/SGGS/${source.pageno}`)} disabled={source.id !== 'G'}>{`Open Ang ${source.pageno}`}</Button>,
      <Button onClick={e => push(`/SGGS/${source.pageno}`)} disabled>Open Raag</Button>,
    ]}
  />;
});

export default withRouter(class Shabads extends Component {
  constructor (props) {
    super (props);
    let q = (this.props.params && this.props.params.q) || '';
    this.state = { q, type: 0, source: 'G' };
  }
  search(q) {
    this.setState({ q });
    this.props.router.push(`shabads/${q}`)
  }
  updateSearchType(type) {
    this.setState({ type });
  }
  updateSource(source) {
    this.setState({ source });
  }

  render () {
    const { type, source, q } = this.state;

    return (
      <div>

        <Toolbar title="Gurbani Searcher">
          <div style={styles.results}>
            <Throttle time={500} handler="onChange">
              <Textfield autoCapitalize="off" className={type != 3 ? 'gurbani-input' : ''}
                style={styles.field} id="q" defaultValue={q}
                onChange={e => this.search(e.target.value)} floatingLabel label="Search"
              />
            </Throttle>
            <select style={styles.select} label="Search Type" value={type}
              onChange={(e, v) => this.updateSearchType(v)} children={
                TYPES.map((v, i) => <option value={i} key={i}>{v}</option>)
              } />
            <select style={styles.select} label="Source of Baani" value={source}
              onChange={(e, v) => this.updateSource(v)} children={
                Object.keys(SOURCES).map(key => <option value={key} key={key}>{SOURCES[key]}</option>)
              } />
          </div>
        </Toolbar>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
          {
            q.length === 0
            ? <h1 style={{ textAlign: 'center' }}>Enter a query</h1>
            : <Khajana options={{ q, source, type, }}>{
              ({ data: { shabads = [] } }) => (shabads.length === 0
                ? <h1 style={{ textAlign: 'center' }}> No Shabads Found </h1>
                : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
                    {shabads.map(({ shabad }) => <SearchCard key={shabad.id} {...shabad} />)}
                  </div>
                )
              )
            }</Khajana>
          }
        </div>
      </div>
    );
  }
});
