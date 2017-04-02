import React, { Component } from 'react';
import { TYPES, SOURCES } from 'khajana';
import styled from 'styled-components';
import Toolbar from '../../components/Toolbar';
import CardView from '../../components/Card';
import Khajana from '../../components/Khajana';
import LinkButton from '../../components/LinkButton';
import Textfield from '../../components/Textfield';
import Select from '../../components/Select';
import GurbaniFont from '../../components/GurbaniFont';

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ShabadResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
`;

const Capitalize = styled.span`
  text-transform: capitalize;
`;

export const SearchCard = props => {
  const { transliteration, gurbani, shabadid, source } = props;

  return (
    <CardView
      title={<span className="gurbani-text">{gurbani.gurmukhi}</span>}
      text={<Capitalize>{transliteration}</Capitalize>}
      actions={[
        <LinkButton key={0} to={`/shabads/${shabadid}`}>
          Open Shabad
        </LinkButton>,
        <LinkButton key={1} to={`/SGGS/${source.pageno}`} disabled={source.id !== 'G'}>
          {`Open Ang ${source.pageno}`}
        </LinkButton>,
        <LinkButton key={2} to={`/SGGS/${source.pageno}`} disabled>
          Open Raag
        </LinkButton>,
      ]}
    />
  );
};

SearchCard.propTypes = {
  transliteration: React.PropTypes.string,
  gurbani: React.PropTypes.object,
  shabadid: React.PropTypes.string,
  source: React.PropTypes.object,
};

export default class Shabads extends Component {
  constructor (props) {
    super(props);

    let q = (this.props.match.params && this.props.match.params.q) || '';

    this.state = { q, keyword: q, type: 0, source: 'G' };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
    this.handleUpdateSearchType = this.handleUpdateSearchType.bind(this);
    this.handleUpdateSource = this.handleUpdateSource.bind(this);
  }

  handleSearch (e) {
    this.setState({ q: this.state.keyword });
    e.preventDefault();
  }

  handleUpdateSearchQuery ({ target: { value: keyword } }) {
    this.setState({ keyword });
  }

  handleUpdateSearchType ({ target: { value: type } }) {
    this.setState({ type });
  }

  handleUpdateSource ({ target: { value: source } }) {
    this.setState({ source });
  }

  shouldComponentUpdate (props, state) {
    return this.state.q !== state.q || this.state.type !== state.type || this.state.source !== state.source;
  }

  componentDidMount () {
    console.dir(this.$search);
    this.$search.focus();
  }

  render () {
    const { type, source, q } = this.state;

    return (
      <div>

        <Toolbar title="Gurbani Searcher">
          <SearchForm onSubmit={this.handleSearch}>
            <GurbaniFont disabled={parseInt(type, 10) === 3}>
              <Textfield
                innerRef={input => {
                  this.$search = input;
                }}
                defaultValue={q}
                placeholder={parseInt(type, 10) === 3 ? 'Search' : 'Koj'}
                autoCapitalize="off"
                onChange={this.handleUpdateSearchQuery}
              />
            </GurbaniFont>

            <Select
              label="Search Type"
              value={type}
              onChange={this.handleUpdateSearchType}
            >
              {
                TYPES.map((v, i) => <option value={i} key={i}>{v}</option>)
              }
            </Select>

            <Select
              label="Source of Baani"
              value={source}
              onChange={this.handleUpdateSource}
            >
              {
                Object
                  .keys(SOURCES)
                  .map(key => <option value={key} key={key}>{SOURCES[key]}</option>)
              }
            </Select>

          </SearchForm>
        </Toolbar>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
          {
            q.length === 0

            ? <h1 style={{ textAlign: 'center' }}>Enter a query</h1>

            : <Khajana options={{ q, source, type }}>
              {
                ({ data: { shabads = [] } }) => shabads.length === 0
                ? <h1 style={{ textAlign: 'center' }}> No Shabads Found </h1>
                : <ShabadResults>
                  {
                    shabads
                      .map(({ shabad }) => <SearchCard key={shabad.id} {...shabad} />)
                  }
                </ShabadResults>
              }
            </Khajana>
          }
        </div>
      </div>
    );
  }
}

Shabads.propTypes = {
  match: React.PropTypes.object,
};
