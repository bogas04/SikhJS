import React from 'react';
import SearchList, { SearchResults } from '../SearchList';
import { Card, LinkButton } from '../../components';

const mapItemToView = ({ raag, gurmukhi, granth, id, ang }) => (
  <Card key={id} title={`${raag} ${gurmukhi}`} actions={[
    granth !== 1 || ang === 0
      ? ''
      : <LinkButton key={0} to={`/SGGS/${ang}`}>{`Open Ang ${ang}`}</LinkButton>,
    <LinkButton key={1} to={`/raags/${id}/${raag}`}>More Info</LinkButton>,
  ]} />
);

const filterResults = ({ keyword, data }) => data !== ''
  ? data.filter(e => e.raag.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
  : data
  ;

const onDataLoad = ({ data, keyword, ...props }) => (
  <SearchResults data={filterResults({ data, keyword })} mapItemToView={mapItemToView} {...props} />
);

export default () => {
  return (
    <SearchList
      resourcePath={`assets/docs/json/raags.json`}
      title={`Raags`}
      onDataLoad={onDataLoad}
    />
  );
};