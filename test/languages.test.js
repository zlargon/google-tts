const googleTTS = require("../dist/index");

test("All voice codes are valid", async (done) => {
  const responses = googleTTS.languages.get().map((lang) => {
    return googleTTS
      .getAudioBase64("test", { lang: lang.code })
      .catch((err) => {
        console.log("language code failed: " + lang.code);
        console.log(err);
        done.fail("language code failed: " + lang.code);
      });
  });

  await Promise.all(responses);
  done();
}, 10000);

test("lookup by code", () => {
  const english = googleTTS.languages.findByCode("en-US");
  expect(english.name).toBe("English (United States)");
});

test("lookup by name", () => {
  const english = googleTTS.languages.findByName("English (United States)");
  expect(english.code).toBe("en-US");
});
