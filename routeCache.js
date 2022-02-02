const { notDeepEqual } = require('assert');
const NodeCache = require('node-cache');

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  // is request a GET?
  if (req.method !== 'GET') {
    return next();
  }
  // if not, call next
  const key = req.originalUrl || req.url;
  const cacheResponse = cache.get(key);
  // check if key exists in cache
  if (cacheResponse) {
    // if it is exists, return the value
    res.send(JSON.parse(cacheResponse));
  } else {
    // if not, replace the value with the result of the next function
    res.originalUrl = res.send;
    res.send = (body) => {
      res.originalUrl(body);
      cache.set(key, body, duration);
    };
    next();
  }
};
