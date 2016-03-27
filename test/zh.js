"use strict";

require('es6-promise').polyfill();
var chai   = require('chai');
var expect = chai.expect;
var tts = require('..');
var fetch = require('isomorphic-fetch');

// setup promise
chai.use(require('chai-as-promised'));

describe('Chinese TTS', function() {

  it('你好', function () {
    expect(
      tts('你好', 'zh')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('你好世界', function () {
    expect(
      tts('你好世界', 'zh')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('123', function () {
    expect(
      tts('123', 'zh', 0.24)
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });
});
