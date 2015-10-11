/*!
 * timescale <https://github.com/jonschlinkert/timescale>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');

module.exports = function timescale(num, a, b) {
  if (arguments.length === 1 && !isNumber(num) && typeof num === 'string') {
    return unit(num);
  }
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return (+num * unit(a)) / unit(b || 's');
};

function unit(name) {
  switch (name) {
    case 'ns':
    case 'nanosecond':
    case 'nanoseconds':
      return 1;
    case 'μs':
    case 'microsecond':
    case 'microseconds':
      return 1e3;
    case 'ms':
    case 'millisecond':
    case 'milliseconds':
      return 1e6;
    case 's':
    case 'second':
    case 'seconds':
      return 1e9;
    case 'm':
    case 'minute':
    case 'minutes':
      return 6e10;
    case 'h':
    case 'hour':
    case 'hours':
      return 36e11;
    case 'd':
    case 'day':
    case 'days':
      return 864e11;
    case 'w':
    case 'week':
    case 'weeks':
      return 6048e11;
    default: {
      throw new Error('"' + name + '" is not a valid unit of time.');
    }
  }
}
