import { getDB } from './constants';

export const isBookmarked = ({ key, value }) => getDB().bookmarks
  .where('[key+value]').equals([key, value])
  .count()
  .then(count => Promise.resolve( count === 1 ))
  .catch(e => Promise.reject(e));

export const toggleBookmark = ({ isBookmarked, title, key, value }) => isBookmarked
  ? (
    getDB().bookmarks
    .where('[key+value]').equals([key, value])
    .delete()
    .then(e => Promise.resolve(false))
    .catch(e => Promise.reject(e))
  ) : (
    getDB().bookmarks
    .add({ key, value, timestamp: Date.now(), title })
    .then(e => Promise.resolve(true))
    .catch(e => Promise.reject(e))
  )
;

export const updateBookmarkTitle = ({ id, title }) => getDB().bookmarks
  .update(id, { title });

export const getAllBookmarks = () => getDB().bookmarks.toArray();

export const clearAllBookmarks = () => getDB().bookmarks.clear();
