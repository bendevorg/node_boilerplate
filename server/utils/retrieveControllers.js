/**
 * Module to get all controllers for a router
 * @module utils/retrieveControllers
 */
const fs = require('fs');

/**
 * Retrieve controllers
 *
 * @param {string} filename - Router name to get controllers
 * @return {array} - Returns an array with all controllers
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
module.exports = filename => {
  const controllersPath = `${process.cwd()}/server/controllers/${filename}`;
  const controllers = [];

  try {
    // Get our routers
    fs.readdirSync(controllersPath).forEach(file => {
      if (file.indexOf('.js') !== -1) {
        /* eslint-disable-next-line global-require, import/no-dynamic-require */
        controllers[file.split('.')[0]] = require(`${controllersPath}/${file}`);
      }
    });
  } catch (err) {
    //  TODO: Throw error
  }

  return controllers;
};
