import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Throttle } from 'react-throttle';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { AuthorChip } from '../Author';
import Select from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Shabad from '../Shabad';
import { searchTypes, sourceTypes, API_URL } from '../../constants';

export const SearchCard = withRouter(props => {
  const { ID, Transliteration, WriterID, English, ShabadID, SourceID, Gurmukhi, PageNo, router: { push }} = props;
  return (
    <Card style={{ margin: 10 }} key={ID}>
      <CardHeader title={<div>
          <span className="gurbani-text">{Gurmukhi}</span>
          {' '}
          <span style={{ textTransform: 'capitalize' }}>{Transliteration}</span>
          <FlatButton label="Open Shabad" onTouchTap={e => push(`/shabad/${ShabadID}`)} />
          <FlatButton label="Open Ang" onTouchTap={e => push(`/SGGS/${PageNo}`)} disabled={SourceID !== 'G'} />
          <FlatButton label="Open Raag" onTouchTap={e => push(`/SGGS/${PageNo}`)} disabled />
        </div>}
        showExpandableButton={true} actAsExpander={true} />
      <CardText expandable={true}> 
        <AuthorChip id={WriterID} />
        <Shabad id={ShabadID}/>
      </CardText>
    </Card>
  );
});

export default class Shabads extends Component {
  constructor (props) {
    super (props);
    let q = (this.props.params && this.props.params.q) || '';
    this.state = { q, shabads: [], searchType: 0, baaniSrc: 1 };
  }
  componentDidMount() {
    if(this.state.q !== '') {
      this.queryAPI();
    }
  }
  search(q) {
    this.setState({ q });
    this.queryAPI();
  }
  updateSearchType(searchType) { this.setState({ searchType }); }
  updateSource(baaniSrc) { this.setState({ baaniSrc }); }

  queryAPI() {
    let { q, searchType, baaniSrc } = this.state;
    const mode = 1, maxRecords = 20;
    const url = `${API_URL}?&mode=${mode}&q=${q}&src=${baaniSrc}&type=${searchType}&recnum=${maxRecords}&writer=0&raag=0&format=json`;

    fetch(url).then(r => r.json())
      .then(({ shabads }) => this.setState({ shabads }))
      .catch(err => console.error(err));
  }
  render () {
    const { shabads, searchType, baaniSrc } = this.state;

    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <Throttle time={200} handler="onChange">
              <TextField inputStyle={{ fontFamily: 'gurmukhi_heavy' }} id="q" onChange={(e, v) => this.search(v)}
                style={{ width: 400 }} floatingLabelText="Search" hintText="Search"/>
            </Throttle>
          </ToolbarGroup>
          <ToolbarGroup>
            <Select style={{ width: 400 }} floatingLabelText="Search Type" value={searchType}
              onChange={(e, v) => this.updateSearchType(v)} children={
                searchTypes.map((v, i) => <MenuItem value={i} primaryText={v} key={i} />)
              } />
          </ToolbarGroup>
          <ToolbarGroup>
            <Select style={{ width: 400 }} floatingLabelText="Source of Baani" value={baaniSrc}
              onChange={(e, v) => this.updateSource(v)} children={
                sourceTypes.map((v, i) => <MenuItem value={i} primaryText={v} key={i} />)
              } />
          </ToolbarGroup>
        </Toolbar>
        {shabads.map(({ shabad }) => <SearchCard key={shabad.ID} {...shabad} />)}
      </div>
    );
  }
}
