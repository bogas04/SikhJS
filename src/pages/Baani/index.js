import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';
import { GurbaniFont, Markdown as FetchAndMarkdown } from '../../components';

const Wrapper = styled.div`
  line-height: 2em;
  padding: 10px;
  text-align: center;
  @media(max-width: 700px) {
    text-align: left;
  }
  ::before {
    height: 0.2rem;
    content: "";
    background-color: teal;
    width: ${({ scroll = 0 }) => `${scroll}vw`};
    position: fixed;
    top: 0px;
    left: 0;
  }
`;

class OnScroll extends React.PureComponent {
  constructor(p) {
    super(p);
    this.state = { x: window.scrollX, y: window.scrollY, maxX: window.maxScrollX, maxY: window.maxScrollY };
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    window.requestAnimationFrame(() =>
      this.setState({
        x: window.scrollX,
        y: window.scrollY,
        maxX: window.scrollMaxX,
        maxY: window.scrollMaxY,
      })
    )
  }

  componentDidMount() {
    // TODO: Throttle or something
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    return this.props.children(this.state);
  }
}

export default class Baani extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate (nextProps) {
    const currentBaani = this.props.match.params.baani;
    const nextBaani = nextProps.match.params.baani;

    return nextBaani !== currentBaani;
  }
  render () {
    const { match: { params: { baani } } } = this.props;

    return (
      <GurbaniFont style={{ textAlign: 'center' }}>
        <OnScroll>{({ y, maxY }) => (
          <Wrapper scroll={(y / maxY) * 100}>
            <FetchAndMarkdown url={`assets/docs/md/baanies/${baani}.md`} />
          </Wrapper>
        )}
        </OnScroll>
      </GurbaniFont>
    );
  }
}

Baani.propTypes = {
  match: PropTypes.object,
};
