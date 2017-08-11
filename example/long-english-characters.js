"use strict";
require('es6-promise').polyfill();

const key = require('../lib/key');
const tts = require('../lib/api');

/*
 * Google TTS API has the limitation with the length of characters (200).
 * This example will show you how to cut the long characters into several small string and get multiple TTS urls.
 */

const multi_tts = (text, speed, timeout) => {
  const MAX = 200;  // Max string length

  const isSpace = (s, i) => /\s/.test(s.charAt(i));
  const lastIndexOfSpace = (s, left, right) => {
    for (let i = right; i >= left; i--) {
      if (isSpace(s, i)) return i;
    }
    return -1;  // not found
  };

  return key(timeout).then(key => {
    const result = [];
    const addResult = (text, start, end) => {
      const str = text.slice(start, end + 1);
      result.push({
        text: str,
        url: tts(str, key, 'en', speed)
      });
    };

    let start = 0;
    for (;;) {

      // check text's length
      if (text.length - start <= MAX) {
        addResult(text, start, text.length - 1);
        break;  // end of text
      }

      // check whether the word is cut in the middle.
      let end = start + MAX - 1;
      if (isSpace(text, end) || isSpace(text, end + 1)) {
        addResult(text, start, end);
        start = end + 1;
        continue;
      }

      // find last index of space
      end = lastIndexOfSpace(text, start, end);
      if (end === -1) {
        throw new Error('the amount of single word is over that 200.');
      }

      // add result
      addResult(text, start, end);
      start = end + 1;
    }

    return result;
  });
};


const article = `The Industrial Revolution had several roots, one of which was a commercial revolution that, beginning as far back as the sixteenth century, accompanied Europe’s expansion overseas.
Both exports and imports showed spectacular growth, particularly in England and France.
An increasingly larger portion of the stepped-up commercial activity was the result of trade with overseas colonies.
Imports included a variety of new beverages, spices, and ship’s goods around the world and brought money flowing back.
Europe’s economic institutions, particularly those in England, were strong, had wealth available for new investment, and seemed almost to be waiting for some technological breakthrough that would expand their profit-making potential even more.

The breakthrough came in Great Britain, where several economic advantages created a climate especially favorable to the encouragement of new technology.
One was its geographic location at the crossroads of international trade.
Internally, Britain was endowed with easily navigable natural waterway, which helped its trade and communication with the world.
Beginning in the 1770’s, it enjoyed a boom in canal building, which helped make its domestic market more accessible.
Because water transportation was the cheapest means of carrying goods to market, canals reduced prices and thus increased consumer demand.
Great Britain also had rich deposits of coal that fed the factories springing up in industrial and consumer goods.

Another advantage was Britain’s large population of rural, agricultural wage earners,as well as cottage workers, who had the potential of being more mobile than peasants of some other countries.
Eventually they found their way to the cities or mining communities and provided the human power upon which the Industrial Revolution was built.
The British people were also consumers; the absence of internal tariffs, such as those that existed in France or Italy or between the German states, made Britain the largest free-trade area in Europe.
Britain’s relatively stable government also helped create an atmosphere conducive to industrial progress.

Great Britain’s better-developed banking and credit system also helped speed the industrial progress, as did the fact that it was the home of an impressive array of entrepreneurs and inventors.
Among them were a large number of nonconformists whose religious principles encouraged thrift and industry rather than luxurious living and who tended to pour their profits back into their business, thus providing the basis for continued expansion.

A precursor to the Industrial Revolution was a revolution in agricultural techniques.
Ideas about agricultural reform developed first in Holland, where as early as the mid-seventeenth century, such modern methods as crop rotation, heavy fertilization, and diversification were all in use.
Dutch peasant farmers were known throughout Europe for their agricultural innovations, but as British markets and opportunities grew, the English quickly learned from them.
As early as the seventeenth century the Dutch were helping them drain marshes and fens where, with the help of advanced techniques, they grew new crops.
By the mid-eighteenth century new agricultural methods as well as selective breeding of livestock had caught on throughout the country.

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

Much of the increased production was consumed by Great Britain’s burgeoning population.
At the same time, people were moving to the city, partly because of the enclosure movement; that is, the fencing of common fields and pastures in order to provide more compact, efficient privately held agricultural parcels that would produce more goods and greater profits.
In the sixteenth century enclosures were usually used for creating sheep pastures, but by the eighteenth century new farming techniques made it advantageous for large landowners to seek enclosures in order to improve agricultural production.
Between 1714 and 1820 over 6 million acres of English land were enclosed.
As a result, many small, independent farmers were forced to sell out simply because they could not compete.
Non-landholding peasants and cottage workers, who worked for wages and grazed cows or pigs on the village common, were also hurt when the common was no longer available.
It was such people who began to flock to the cities seeking employment and who found work in the factories that would transform the nation and, the world.

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;

multi_tts(article)
.then(result => {
  result.forEach((o, i) => {
    console.log(`${i+1}. ${o.text.length} characters`);
    console.log(`${o.text}`);
    console.log(`${o.url}\n`);
  });

  const origin = result.map(x => x.text).join('');
  console.log('Text are the same:', origin === article);
  console.log('Length are the same:', origin.length === article.length, `(${origin.length})`);
})
.catch(console.error);
