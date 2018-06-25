'use strict';
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

module.exports = () => {

  let key = null;
  let cert = null;
  let ca = null;

  const credentialsPath = path.resolve(process.cwd() + '/.credentials');

  if (fs.existsSync(credentialsPath + '/private.key'))
    key = fs.readFileSync(credentialsPath + '/private.key');

  if (fs.existsSync(credentialsPath + '/primary.crt'))
    cert = fs.readFileSync(credentialsPath + '/primary.crt');

  if (fs.existsSync(credentialsPath + '/intermediate.crt'))
    ca = fs.readFileSync(credentialsPath + '/intermediate.crt');

  if (!key || !cert || !ca)
    return false;

  return { 
    key: key,
    cert: cert,
    ca: ca
  };
}