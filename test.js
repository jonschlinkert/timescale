'use strict';

require('mocha');
var assert = require('assert');
var timescale = require('./');

describe('timescale', function () {
  it('should throw an error if time is not a number', function () {
    try {
      timescale('foo');
    } catch(err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected a number');
    }
  });
});

describe('number', function () {
  it('should work when number is an integer', function() {
    assert.equal(timescale(7, 'd', 'w'), 1);
  });

  it('should work when number is a string', function() {
    assert.equal(timescale('7', 'd', 'w'), 1);
  });
});

describe('conversions', function () {
  it('should convert to seconds by default', function () {
    assert.equal(timescale(1000000000, 'ns'), 1);
    assert.equal(timescale(1, 'minute'), 60);
  });

  it('should convert from ns to s', function () {
    assert.equal(timescale(1000000000, 'ns', 's'), 1);
  });

  it('should convert from ns to ms', function () {
    assert.equal(timescale(1000000000, 'ns', 'ms'), 1000);
    assert.equal(timescale(1000000, 'ns', 'ms'), 1);
  });

  it('should convert from ns to m', function () {
    assert.equal(timescale(1000000000, 'ns', 'm'), 0.016666666666666666);
  });

  it('should convert from ns to h', function () {
    assert.equal(timescale(1000000000, 'ns', 'h'), 0.0002777777777777778);
  });

  it('should convert from ns to d', function () {
    assert.equal(timescale(1000000000, 'ns', 'd'), 0.000011574074074074073);
  });

  it('should convert from ns to w', function () {
    assert.equal(timescale(1000000000, 'ns', 'w'), 0.0000016534391534391535);
  });

  it('should convert from d to w', function () {
    assert.equal(timescale(7, 'd', 'w'), 1);
  });
});
