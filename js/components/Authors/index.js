import React, { Component } from 'react';
import Progress from 'material-ui/CircularProgress';
import { Throttle } from 'react-throttle';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export const SearchCard = ({ id, author, gurmukhi, description }) => (
  <Card style={{ margin: 10 }} key={id}>
    <CardHeader title={`${author} ${gurmukhi}`} textStyle={{ display: 'block' }} showExpandableButton={true} actAsExpander={true} />
    <CardText expandable={true}>{description}</CardText>
  </Card>
);

export default class Authors extends Component {
  constructor(p) {
    super(p);
    this.state = { authors: [], loading: true, keyword: '' };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/authors.json`)
      .then(r => r.json())
      .then(authors => this.setState({ authors, loading: false }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
  render() {
    let { authors, loading, keyword } = this.state;

    if (keyword !== '') { authors = authors.filter(e => e.author.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle className='toolbar-title' text="Authors" />
            <Throttle time={500} handler="onChange">
              <TextField id="q" onChange={(e, v) => this.updateKeyword(v)}
                style={{ width: 300 }} floatingLabelText="Search" hintText="Search"/>
            </Throttle>
          </ToolbarGroup>
        </Toolbar>
        {
          loading
            ? <Progress size={100} thickness={5} />
            : authors.map(author => <SearchCard key={author.id} {...author} />)
        }
      </div>
    );
  }
}
