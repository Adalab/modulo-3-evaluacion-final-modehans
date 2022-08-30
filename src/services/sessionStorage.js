const get = (key) => {
  return sessionStorage.getItem(key);
};

const set = (key, value) => {
  const sessionStorageData = JSON.stringify(value);
  sessionStorage.setItem(key, sessionStorageData);
};

const remove = (key) => {
  sessionStorage.removeItem(key);
};

const clear = () => {
  sessionStorage.clear();
};

const objectToExport = {
  get: get,
  set: set,
  remove: remove,
  clear: clear,
};

export default objectToExport;
