import React, { Component } from 'react';
import Progress from 'material-ui/CircularProgress';
import Button from 'material-ui/FlatButton';
import { Throttle } from 'react-throttle';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export const SearchCard = withRouter(({ id, raag, gurmukhi, granth, ang, description, router: { push } }) => {
  const title = <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', alignItems: 'flexStart', justifyContent: 'flex-start', flexDirection: 'column', flexWrap: 'wrap', }}>
      {`${raag} ${gurmukhi}`}
    </div>
    <div>
      <Button disabled={granth !== 1 && ang === 0} label={`Open Ang ${ang}`} onTouchTap={e => push(`/SGGS/${ang}`)} />
    </div>
  </div>;
  return <Card style={{ margin: 10 }} key={id}>
    <CardHeader title={title} textStyle={{ display: 'block' }} showExpandableButton={true} actAsExpander={true} />
    <CardText expandable={true}>{description}</CardText>
  </Card>
});

export default class Raags extends Component {
  constructor(p) {
    super(p);
    this.state = { raags: [], loading: true, keyword: '' };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/raags.json`)
      .then(r => r.json())
      .then(raags => this.setState({ raags, loading: false }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
  render() {
    let { raags, loading, keyword } = this.state;

    if (keyword !== '') { raags = raags.filter(e => e.raag.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle className='toolbar-title' text="Raags" />
            <Throttle time={500} handler="onChange">
              <TextField id="q" onChange={(e, v) => this.updateKeyword(v)}
                style={{ width: 300 }} floatingLabelText="Search" hintText="Search"/>
            </Throttle>
          </ToolbarGroup>
        </Toolbar>
        {
          loading
            ? <Progress size={100} thickness={5} />
            : raags.map(raag => <SearchCard key={raag.id} {...raag} />)
        }
      </div>
    );
  }
}

