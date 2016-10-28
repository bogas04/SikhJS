import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Throttle } from 'react-throttle';
import { withRouter } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { clearAllBookmarks, getAllBookmarks, updateBookmarkTitle } from '../../bookmarks';
import Progress from 'material-ui/CircularProgress';

const SearchCard = withRouter(({ data, router: { push }, onTitleChange }) => {
  const { title, id, key, value, timestamp } = data;

  const Title = <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', flexWrap: 'wrap', }}>
      <Throttle handler="onChange" time="200">
        <TextField
          hintText={title}
          onChange={(e, v) => onTitleChange(v)}
          style={{ width: 350 }}
          type="text"
          defaultValue={title}
        />
      </Throttle>
    </div>
    <div>
      { key === 'shabad' && <FlatButton label="Open Shabad" onTouchTap={e => push(`/shabad/${value}`)} /> }
      { key === 'sggs' && <FlatButton label={`Open Ang ${value}`} onTouchTap={e => push(`/SGGS/${value}`)} /> }
    </div>
  </div>;
  return (
    <Card style={{ margin: 10 }}>
      <CardHeader title={Title} textStyle={{ display: 'block' }} />
    </Card>
  );
});

export default class Bookmarks extends Component {
  constructor(p) {
    super(p);
    this.state = {
      bookmarks: [],
      loading: true,
      keyword: ''
    }
    getAllBookmarks()
      .then(bookmarks => this.setState({ bookmarks, loading: false }))
      .catch(e => console.error(e));
  }
  render() {
    let { loading, bookmarks, keyword } = this.state;

    if (keyword !== '') { bookmarks = bookmarks.filter(e => e.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ToolbarTitle className='toolbar-title' text="Bookmarks" />
            <Throttle time={500} handler="onChange">
              <TextField id="q" onChange={(e, v) => this.updateKeyword(v)} floatingLabelText="Search" hintText="Search"/>
            </Throttle>
            <FlatButton onTouchTap={e => this.clearAllBookmarks()} label="Clear All Bookmarks"/>
          </ToolbarGroup>
        </Toolbar>
        {
          loading
            ? <Progress size={100} thickness={5} />
            : (
              bookmarks.length === 0
              ? <h1 style={{ textAlign: 'center' }}>No Bookmarks Found</h1>
              : bookmarks.map(b => (
                <SearchCard data={b} key={b.id} onTitleChange={(title = b.title) => this.updateBookmark({ ...b, title })} />
              ))
            )
        }
      </div>
    );
  }
  updateBookmark({ key, value, id, timestamp, title }) {
    updateBookmarkTitle({ key, value, id, timestamp, title })
      .then(e => console.log(e))
      .catch(e => console.error(e));
  }
  clearAllBookmarks() {
    clearAllBookmarks()
      .then(e => this.setState({ bookmarks: [] }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
}
