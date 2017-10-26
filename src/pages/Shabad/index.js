import PropTypes from 'prop-types';
import React from 'react';
import { Khajana } from '../../components/';
import ShabadView from './ShabadView';

class ComposedShabad extends React.Component {
  shouldComponentUpdate (nextProps) {
    const nextId = nextProps.id || nextProps.match.params.id;
    const currentId = this.props.id || this.props.match.params.id;
    console.log({ nextId, currentId });
    return nextId !== currentId;
  }
  render () {
    const { props } = this;
    return (
      <Khajana options={{ id: props.id || props.match.params.id }} cache="force-cache">{
        ({ data: { shabadinfo = {}, gurbani = [] } }) => (
          gurbani && gurbani.length > 0 && (
            <ShabadView
              id={parseInt(props.id || props.match.params.id, 10)}
              gurbani={gurbani}
              ang={parseInt(shabadinfo.pageno, 10)}
              source={shabadinfo.source}
              author={{ ...shabadinfo.writer, id: parseInt(shabadinfo.writer.id, 10) }}
            />
          )
        )}
      </Khajana>
    );
  }
}

ComposedShabad.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default ComposedShabad;
