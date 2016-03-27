"use strict";

require('es6-promise').polyfill();
var chai   = require('chai');
var expect = chai.expect;
var tts = require('..');
var fetch = require('isomorphic-fetch');

// setup promise
chai.use(require('chai-as-promised'));

describe('English TTS', function() {

  it('Hello', function () {
    expect(
      tts('Hello')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('hello', function () {
    expect(
      tts('hello world', 'en')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('hello world', function () {
    expect(
      tts('hello world', 'en', 1)
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('123', function () {
    expect(
      tts('123', 'en', 0.24)
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });
});
