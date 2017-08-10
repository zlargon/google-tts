"use strict";

require('es6-promise').polyfill();
var chai   = require('chai');
var expect = chai.expect;
var tts = require('..');
var fetch = require('isomorphic-fetch');

// setup promise
chai.use(require('chai-as-promised'));

describe('Long Characters', function() {

  it('English: 180 characters', function () {
    expect(
      tts('The Industrial Revolution had several roots, one of which was a commercial revolution that, beginning as far back as the sixteenth century, accompanied Europe’s expansion overseas.', 'en')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('English: 200 characters', function () {
    expect(
      tts('The Industrial Revolution had several roots, one of which was a commercial revolution that, beginning as far back as the sixteenth century, accompanied Europe’s expansion overseas. exports and imports', 'en')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('English: 268 characters throw RangeError', function () {
    expect(
      tts('The Industrial Revolution had several roots, one of which was a commercial revolution that, beginning as far back as the sixteenth century, accompanied Europe’s expansion overseas. Both exports and imports showed spectacular growth, particularly in England and France.', 'en')
    ).to.eventually.be.rejectedWith(RangeError);
  });

  it('Chinese: 193 characters', function () {
    expect(
      tts('如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。', 'zh')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('Chinese: 200 characters', function () {
    expect(
      tts('如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石', 'zh')
      .then(function (url) { return fetch(url) })
      .then(function (res) { return res.status })
    ).to.eventually.equal(200);
  });

  it('Chinese: 211 characters throw RangeError', function () {
    expect(
      tts('如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石是在海洋沉积岩中发现的', 'zh')
    ).to.eventually.be.rejectedWith(RangeError);
  });

});
