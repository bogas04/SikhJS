import React from 'react';
import Markdown from '../Markdown';

import Toolbar from '../Toolbar';

export default () => <div>
  <Toolbar title="Sikh Calendar" />
  <Markdown url={"docs/md/calendar.md"} />
</div>;
