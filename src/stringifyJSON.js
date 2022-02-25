// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];

  if (typeof obj === 'function' || obj === undefined) {
    return '';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null || typeof obj === 'boolean' || typeof obj === 'number') {
    return '' + obj;
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i ++) {
      result.push(stringifyJSON(obj[i]));
    }
    result = result.join(',');
    return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    result = result.join(',');
    return '{' + result + '}';
  }

  return result;
};