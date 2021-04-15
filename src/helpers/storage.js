export const LOGGED_IN = 'loggedin';

const storage = {
  save: (key, value) => {
    localStorage.setItem(key, value);
  },
  get: (key) => {
    let res = null;
    res = localStorage.getItem(key);
    return res;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export default storage;
