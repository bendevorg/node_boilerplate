/** 
  Arbitrary log messages. 'critical' is most severe; 'debug' is least. 
  Rollbar.critical("Connection error from remote Payments API");
  Rollbar.error("Some unexpected condition");
  Rollbar.warning("Connection error from Twitter API");
  Rollbar.info("User opened the purchase dialog");
  Rollbar.debug("Purchase dialog finished rendering");
  
  // Can include custom data with any of the above. 
  Rollbar.info("Post published", {postId: 123});
*/

const Rollbar = require('rollbar');
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR,
  verbose: true,
  captureUncaught: true,
  captureUnhandledRejections: true,
  handleUncaughtExceptions: true,
  handleUnhandledRejections: true,
  payload: {
    environment: process.env.NODE_ENV
  }
});

module.exports = rollbar;
