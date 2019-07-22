/**
 * Module to get all schemas for a router
 * @module utils/retrieveSchemas
 */
const fs = require('fs');

/**
 * Retrieve schemas
 *
 * @param {string} filename - Router name to get schemas
 * @return {array} - Returns an array with all schemas
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
module.exports = filename => {
  const schemasPath = `${process.cwd()}/server/schemas/${filename}`;
  const schemas = [];

  try {
    // Get our routers
    fs.readdirSync(schemasPath).forEach(file => {
      if (file.indexOf('.js') !== -1) {
        /* eslint-disable-next-line global-require, import/no-dynamic-require */
        schemas[file.split('.')[0]] = require(`${schemasPath}/${file}`);
      }
    });
  } catch (err) {
    //  TODO: Throw error
  }

  return schemas;
};
