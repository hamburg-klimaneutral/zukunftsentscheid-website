// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b875be0322304b88e1a6eb8bed8fe524@o4508935781679104.ingest.de.sentry.io/4509456902848592",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
