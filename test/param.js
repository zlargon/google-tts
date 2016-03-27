"use strict";

require('es6-promise').polyfill();
var chai   = require('chai');
var expect = chai.expect;
var tts = require('..');

// setup promise
chai.use(require('chai-as-promised'));

describe('parameters', function() {

  it("text = null", function () {
    return expect(
      tts(null)
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("text = ''", function () {
    return expect(
      tts('')
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("text = 123", function () {
    return expect(
      tts(123)
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("lang = null", function () {
    return expect(
      tts('test', null)
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("lang = ''", function () {
    return expect(
      tts('test', '')
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("lang = 123 (number)", function () {
    return expect(
      tts('test', 123)
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("speed = null", function () {
    return expect(
      tts('test', 'en', null)
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("speed = '123'", function () {
    return expect(
      tts('test', 'en', '123')
    ).to.eventually.be.rejectedWith(TypeError);
  });

  it("timeout = 10 ms (too short to success)", function () {
    return expect(
      tts('test', 'en', 1, 10)
    ).to.eventually.be.rejectedWith(Error);
  });
});
