// app.js - CommonJS loader for Hostinger Phusion Passenger
(async () => {
  try {
    await import('./oc-api-proxy.mjs');
  } catch (err) {
    console.error('Fatal startup error in oc-api-proxy.mjs:', err);
    process.exit(1);
  }
})();
