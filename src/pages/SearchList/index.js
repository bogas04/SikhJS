import React from 'react';
import styled from 'react-emotion';
import { Textfield, Toolbar, Json } from '../../components';

export default class SearchList extends React.PureComponent {
  constructor (p) {
    super(p);
    this.state = { keyword: '' };
    this.handleKeyword = this.handleKeyword.bind(this);
  }
  handleKeyword (e) {
    const keyword = e.currentTarget.value;
    this.setState({ keyword });
  }
  render () {
    const { keyword } = this.state;
    const { title, resourcePath, onDataLoad } = this.props;

    return (
      <div>
        <Toolbar title={title}>
          <Textfield placeholder="Search" onChange={this.handleKeyword} />
        </Toolbar>

        <Json url={resourcePath}>{({ data }) => onDataLoad({ data, keyword })}</Json>
      </div>
    );
  }
}

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
`;

export const SearchResults = ({ data = [], mapItemToView }) => (
  <ResultsWrapper>
    {data.map(mapItemToView)}
  </ResultsWrapper>
);
