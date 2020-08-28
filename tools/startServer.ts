/* eslint-disable no-console */

const dotenv = require('dotenv');

dotenv.config();

const app =
  process.env.NODE_ENV === 'production'
    ? require('./serverProduction')
    : require('./serverDevelopment');

const { PORT } = process.env;

app.listen(PORT, (error: Error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('🌎  Server is listening on port %s.', PORT);
  }
});
