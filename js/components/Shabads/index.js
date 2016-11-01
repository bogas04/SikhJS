import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, Card, CardTitle, CardText, CardActions } from 'react-mdl';

import { searchTypes, sourceTypes, API_URL } from '../../constants';

import Toolbar from '../Toolbar'; 
import Loader from '../Loader'; 

export const SearchCard = withRouter(props => {
  const { ID, Transliteration, WriterID, English, ShabadID, SourceID, Gurmukhi, PageNo, router: { push }} = props;

  return (<Card shadow={0} style={{ margin: 10 }}>
    <CardTitle><span className="gurbani-text">{Gurmukhi}</span></CardTitle>
    <CardText><span style={{ textTransform: 'capitalize' }}>{Transliteration}</span></CardText>
    <CardActions>
      <Button onClick={e => push(`/shabad/${ShabadID}`)}>Open Shabad</Button>
      <Button onClick={e => push(`/SGGS/${PageNo}`)} disabled={SourceID !== 'G'}>{`Open Ang ${PageNo}`}</Button>
      <Button onClick={e => push(`/SGGS/${PageNo}`)} disabled>Open Raag</Button>
    </CardActions>
  </Card>
  );
});

export default withRouter(class Shabads extends Component {
  constructor (props) {
    super (props);
    let q = (this.props.params && this.props.params.q) || '';
    this.state = { q, shabads: [], searchType: 0, baaniSrc: 1, loading: false };
  }
  componentDidMount() {
    if(this.state.q !== '') {
      this.queryAPI(this.state);
    }
  }
  search(q) {
    this.setState({ q });
    this.props.router.push(`shabads/${q}`)
    this.queryAPI({...this.state, q });
  }
  updateSearchType(searchType) {
    this.setState({ searchType });
    this.queryAPI({...this.state, searchType });
  }
  updateSource(baaniSrc) {
    this.setState({ baaniSrc });
    this.queryAPI({...this.state, baaniSrc });
  }

  queryAPI({ q, searchType, baaniSrc }) {
    this.setState({ loading: true });
    const mode = 1, maxRecords = 20;
    const url = `${API_URL}?&mode=${mode}&q=${q}&src=${baaniSrc}&type=${searchType}&recnum=${maxRecords}&writer=0&raag=0&format=json`;

    fetch(url).then(r => r.json())
      .then(({ shabads }) => this.setState({ shabads, loading: false }))
      .catch(err => console.error(err));
  }
  render () {
    const { shabads, searchType, baaniSrc, loading } = this.state;
    const styles = {
      select: { width: 300, textOverflow: 'ellipsis', overflow: 'hidden' },
      group: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' },
    };

    return (
      <div>
        <Toolbar title="Gurbani Searcher">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Throttle time={500} handler="onChange">
              <Textfield className={ searchType != 3 ? 'gurbani-input' : '' } style={{ width: 300 }} id="q" onChange={e => this.search(e.target.value)} floatingLabel label="Search"/>
            </Throttle>
            <select style={styles.select} label="Search Type" value={searchType}
              onChange={(e, v) => this.updateSearchType(v)} children={
                searchTypes.map((v, i) => <option value={i} key={i}>{v}</option>)
              } />
            <select style={styles.select} label="Source of Baani" value={baaniSrc}
              onChange={(e, v) => this.updateSource(v)} children={
                sourceTypes.map((v, i) => <option value={i} key={i}>{v}</option>)
              } />
          </div>
        </Toolbar>
        <Loader loading={loading}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', flexDirection: 'row' }}>
            {
              shabads.length === 0
              ? <h1 style={{ textAlign: 'center' }}> No Shabads Found </h1>
              : <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
                {shabads.map(({ shabad }) => <SearchCard key={shabad.ID} {...shabad} />)}
              </div>
            }
          </div>
        </Loader>
      </div>
    );
  }
});
