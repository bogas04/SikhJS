import { getDB } from './constants';

export const isBookmarked = ({ key, value }) => getDB().bookmarks
  .where('[key+value]').equals([ key, value ])
  .count()
  .then(count => Promise.resolve(count === 1))
  .catch(err => Promise.reject(err));

export const toggleBookmark = ({ isBookmarked, title, key, value }) => isBookmarked
  ? (
    getDB().bookmarks
    .where('[key+value]').equals([ key, value ])
    .delete()
    .then(() => Promise.resolve(false))
    .catch(err => Promise.reject(err))
  ) : (
    getDB().bookmarks
    .add({ key, value, timestamp: Date.now(), title })
    .then(() => Promise.resolve(true))
    .catch(err => Promise.reject(err))
  )
;

export const updateBookmarkTitle = ({ id, title }) => getDB().bookmarks
  .update(id, { title });

export const getAllBookmarks = () => getDB().bookmarks.toArray();

export const clearAllBookmarks = () => getDB().bookmarks.clear();
