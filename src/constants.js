import Dexie from 'dexie';

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