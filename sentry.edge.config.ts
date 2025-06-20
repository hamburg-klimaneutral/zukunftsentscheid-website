// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b875be0322304b88e1a6eb8bed8fe524@o4508935781679104.ingest.de.sentry.io/4509456902848592",

  enabled: process.env.NODE_ENV !== "development",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
