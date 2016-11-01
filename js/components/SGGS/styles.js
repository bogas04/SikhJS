const flex = { display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' };

export default {
  orange: { color: 'orange' },
  grey: { color: 'grey' },
  translation: (showTranslation, larivaar) => showTranslation ? { display: 'block' } : { display: larivaar ? 'inline-block' : 'inline' },
  flex,
  buttons: { ...flex, flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 5 },
  angContent: { textAlign: 'left', padding: 20, lineHeight: '2em', },
  marginH: amount => ({ margin: `0 ${amount}` }),
  paddingV: amount => ({ padding: `0 ${amount}` }),
};
