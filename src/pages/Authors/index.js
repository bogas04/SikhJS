import React from 'react';
import SearchList, { SearchResults } from '../SearchList';
import { Card, LinkButton } from '../../components';

const mapItemToView = author => (
    <Card key={author.id} title={`${author.author} ${author.gurmukhi}`} actions={[
      <LinkButton key={0} to={`/authors/${author.id}`}>More Info</LinkButton>,
    ]} />
);

const filterResults = ({ keyword, data }) => data !== ''
  ? data.filter(e => e.author.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
  : data
  ;

const onDataLoad = ({ data, keyword, ...props }) => (
  <SearchResults data={filterResults({ data, keyword })} mapItemToView={mapItemToView} {...props} />
);

export default () => {
  return (
    <SearchList
      resourcePath={`assets/docs/json/authors.json`}
      title={`Authors`}
      onDataLoad={onDataLoad}
    />
  );
};