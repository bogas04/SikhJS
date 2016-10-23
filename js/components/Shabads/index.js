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
import Progress from 'material-ui/CircularProgress';
import Toggle from 'material-ui/Toggle';

const API_URL = `https://gurbaninow.com/api/`;

export class SearchCardDetails extends Component {
  constructor(p) {
    super(p);
    this.state = { lines: [], showTranslation: false, loading: true };
  }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
  componentDidMount () {
    const { id } = this.props;
    fetch(`${API_URL}?mode=2&shabadNo=${id}&format=json`).then(r => r.json())
      .then(({ gurbani = [] }) => this.setState({ lines: gurbani, loading: false }))
    //fetch(`/docs/json/hymns/Hymn ${id}.json`).then(r => r.json()).then(lines => this.setState({ lines }))
      .catch(err => console.error(err));
  }
  render () {
    const { lines, showTranslation, loading } = this.state;
    return (
      <div>
        <Toggle label="Show Translation" onToggle={e => this.toggleTranslation()}/>
        {
          loading
          ? <Progress size={100} thickness={5} />
          : lines.map(e => <div>
            <span className="gurbani-text">{e.shabad.Gurmukhi}</span>
            {showTranslation && <div style={{ color: 'grey' }}>{e.shabad.English}</div>}
          </div>)
        }
      </div>
    );
  }
}
export const SearchCard = withRouter(props => {
  const { ID, Transliteration, WriterID, English, ShabadID, SourceID, Gurmukhi, PageNo, router: { push }} = props;
  return (
    <Card style={{ margin: 10 }} key={ID}>
      <CardHeader title={<div>
          <span className="gurbani-text">{Gurmukhi}</span>
          {' '}
          <span style={{ textTransform: 'capitalize' }}>{Transliteration}</span>
          <FlatButton disabled label="Open Shabad" onTouchTap={e => push(`/SGGS/${PageNo}`)}/>
          <FlatButton disabled={SourceID !== 'G'} label="Open Ang" onTouchTap={e => push(`/SGGS/${PageNo}`)}/>
          <FlatButton disabled label="Open Raag" onTouchTap={e => push(`/SGGS/${PageNo}`)}/>
        </div>}
        showExpandableButton={true} actAsExpander={true} />
      <CardText expandable={true}> 
        <AuthorChip id={WriterID} />
        <div className="gurbani-text">{Gurmukhi}</div>
        <div>{English}</div>
        <SearchCardDetails id={ShabadID} />
      </CardText>
    </Card>
  );
});

export default class Shabads extends Component {
  constructor (props) {
    super (props);
    this.state = { q: "", shabads: [], searchType: 0, baaniSrc: 1 };
  }
  search(q) {
    this.setState({ q });
    this.queryAPI();
  }
  updateSearchType(searchType) { this.setState({ searchType }) }
  updateSource(baaniSrc) { this.setState({ baaniSrc }) }

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
    const textFieldStyle = searchType !== 3 ? { fontFamily: 'gurmukhi_heavy' } : {};
    const searchTypes = [ 'First Letter of Begining of Shabad (Gurakhar)', 'First Letter from Anywhere of Shabad (Gurakhar)',
      'Full Word (Gurakhar)', 'Full Word (English)', ];
    const sourceTypes = [ 'All Scripts', 'Sri Guru Granth Sahib', 'Vaaran', 'Dasam Granth and Amrit Keertan' ];

    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <Throttle time="200" handler="onChange">
              <TextField inputStyle={textFieldStyle} id="q" onChange={(e, v) => this.search(v)} style={{ width: 400 }}
                floatingLabelText="Search" hintText="Search"/>
            </Throttle>
            <Select style={{ width: 400 }} floatingLabelText="Search Type" value={searchType}
              onChange={(e, v) => this.updateSearchType(v)} children={
                searchTypes.map((v, i) => <MenuItem value={i} primaryText={v} key={i} />)
              } />
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
