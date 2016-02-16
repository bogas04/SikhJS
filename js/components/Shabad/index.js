import React from 'react';

export default ({ params }) => {
  let shabad = null;

  fetch('docs/keertan.json').then(r => r.json()).then(database => (
    shabad = database.find(e => e.title === params.shabad)
  ));

  return (
    <div style = {{height: '100%'}}>
      <h3> This feature requires internet connection </h3>
      <webview src = {shabad.url + '/print_view'} style = {{width: '100%'}} />
    </div>
  );
}
