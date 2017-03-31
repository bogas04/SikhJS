import Dexie from 'dexie';

const defaultStore = { fontSizeMultiplier: 1, nightMode: false };

export const setSettings = (store = defaultStore) => {
  try {
    localStorage.setItem('settings', JSON.stringify(store));
    return store;
  } catch (err) {
    localStorage.setItem('settings', JSON.stringify(defaultStore));
    return defaultStore;
  }
};

export const getSettings = (initialStore = defaultStore) => {
  try {
    let settings = localStorage.getItem('settings');
    return settings ? JSON.parse(settings) : setSettings(initialStore);
  } catch (err) {
    return setSettings();
  }
};

export const getDB = () => {
  const db = new Dexie('SikhJS');
  /* eslint-disable camelcase */
  db.version(1).stores({
    bookmarks: '++id,timestamp,title,key,value,[key+value]',
    sehaj_paath: '++id,timestamp,ang,title',
  });
  db.open();
  return db;
};

