const storage = {};

storage.set = (key, value) => localStorage.setItem(key, value);
storage.get = key => localStorage.getItem(key);


export default storage;
