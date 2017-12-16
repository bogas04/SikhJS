import React from 'react';
import { TYPES, SOURCES } from 'khajana';
import styled from 'react-emotion';
import { GurbaniFont, Textfield, Select } from '../../components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function SearchForm ({ type, source, q, onSubmit, onUpdateQuery, onUpdateType, onUpdateSource }) {
  const shouldDisplayEnglish = parseInt(type, 10) === 3 || parseInt(type, 10) === 4;
  return (
    <Form onSubmit={onSubmit}>
      <GurbaniFont disabled={shouldDisplayEnglish}>
        <Textfield
          autoFocus
          defaultValue={q}
          placeholder={shouldDisplayEnglish ? 'Search' : 'Koj'}
          autoCapitalize="off"
          onChange={onUpdateQuery}
        />
      </GurbaniFont>

      <Select label="Search Type" value={type} onChange={onUpdateType}>
        {
          TYPES.map((v, i) => <option key={i} value={i}>{v}</option>)
        }
      </Select>

      <Select label="Source of Baani" value={source} onChange={onUpdateSource}>
        {
          Object
            .keys(SOURCES)
            .map(key => <option key={key} value={key}>{SOURCES[key]}</option>)
        }
      </Select>
    </Form>
  );
}
