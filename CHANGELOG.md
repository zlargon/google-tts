## 0.0.6 (Dec 5, 2020)

- `timeout` parameter is deprecated.
- Remove dependency `isomorphic-fetch`.
- Fix the change of Google Translate API ([@freddiefujiwara](https://github.com/freddiefujiwara) in [#37](https://github.com/zlargon/google-tts/pull/37)). Read more in [#35](https://github.com/zlargon/google-tts/issues/35)

## 0.0.5 (Nov 8, 2020)

- Upgrade the dependencies and fix the vulnerability. ([#32](https://github.com/zlargon/google-tts/issues/32))
- Add retry mechanism to prevent fetching token key failed too frequently. ([#33](https://github.com/zlargon/google-tts/issues/33))

## 0.0.4 (Nov 29, 2018)

- Fix the change of Google Translate API ([@ncpierson](https://github.com/ncpierson) in [#19](https://github.com/zlargon/google-tts/pull/19))

## 0.0.3 (Sep 21, 2018)

- Add package-lock.lock file
- Fix the change of Google Translate API ([@ncpierson](https://github.com/ncpierson) in [#14](https://github.com/zlargon/google-tts/pull/14))

## 0.0.2 (Aug 25, 2017)

- Add yarn.lock file
- If length of input text is over than 200 characters, throw a `RangeError` with error messsage. ([#5](https://github.com/zlargon/google-tts/issues/5))
