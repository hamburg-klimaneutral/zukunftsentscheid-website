const URL = process.env.LHCI_TARGET_URL || "http://localhost:3000";

module.exports = {
  ci: {
    collect: {
      url: [URL],
    },
    assert: {
      preset: "lighthouse:no-pwa", // this is not an app, it should not use a SW to control the root url.
      assertions: {
        "is-crawlable": "off", // Vercel keeps preview URLs non-crawlable and it should stay that way.
        "unused-javascript": ["error", { maxLength: 1 }], // caused by sentry, whose JS for error-reporting is (luckily) not used
        "unused-css-rules": ["error", { maxLength: 1 }], // can happen with tailwind if some class appears as a string in code that is not actually a css class
        "categories:performance": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
