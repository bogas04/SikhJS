import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'emotion/react';
import { withRouter } from 'react-router-dom';
import { SEARCH_OPTIONS } from '../../constants';
import { Toolbar, Khajana } from '../../components/';
import SearchCard from './SearchCard';
import SearchForm from './SearchForm';

const ShabadResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
`;

const { TYPE: SEARCH_TYPE, SOURCE: SEARCH_SOURCE } = SEARCH_OPTIONS;

class Shabads extends Component {
  constructor (props) {
    super(props);

    const q = (this.props.match.params && this.props.match.params.q) || '';

    this.state = {
      q,
      keyword: q,
      type: localStorage.getItem(SEARCH_TYPE) || 1,
      source: localStorage.getItem(SEARCH_SOURCE) || 'all',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
    this.handleUpdateSearchType = this.handleUpdateSearchType.bind(this);
    this.handleUpdateSource = this.handleUpdateSource.bind(this);
  }

  shouldComponentUpdate (props, state) {
    return this.state.q !== state.q || this.state.type !== state.type || this.state.source !== state.source;
  }

  render () {
    const { type, source, q } = this.state;

    return (
      <div>
        <Toolbar title="Gurbani Searcher">
          <SearchForm
            q={q}
            type={type}
            source={source}
            onSubmit={this.handleSearch}
            onUpdateQuery={this.handleUpdateSearchQuery}
            onUpdateSource={this.handleUpdateSource}
            onUpdateType={this.handleUpdateSearchType}
          />
        </Toolbar>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
          {
            q.length === 0

              ? <h1 style={{ textAlign: 'center' }}>Enter your query</h1>

              : (
                <Khajana options={{ q, source, type }}>
                  {
                    ({ data: { shabads = [] } }) => shabads.length === 0
                      ? <h1 style={{ textAlign: 'center' }}> No Shabads Found </h1>
                      : (
                        <ShabadResults>
                          {
                            shabads
                              .map(({ shabad }) => <SearchCard key={shabad.id} {...shabad} />)
                          }
                        </ShabadResults>
                      )
                  }
                </Khajana>
              )
          }
        </div>
      </div>
    );
  }

  handleSearch (e) {
    this.setState({ q: this.state.keyword });
    this.props.history.push(`/shabads/${this.state.keyword}`);
    e.preventDefault();
  }

  handleUpdateSearchQuery ({ target: { value: keyword } }) {
    this.setState({ keyword });
  }

  handleUpdateSearchType ({ target: { value: type } }) {
    this.setState({ type });
    localStorage.setItem(SEARCH_TYPE, type);
  }

  handleUpdateSource ({ target: { value: source } }) {
    this.setState({ source });
    localStorage.setItem(SEARCH_SOURCE, source);
  }
}

Shabads.propTypes = {
  match: PropTypes.object,
};

export default withRouter(Shabads);
