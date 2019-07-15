/**
 * Module to get all routers
 * @module utils/retrieveRouters
 */
const fs = require('fs');

/**
 * Retrieve controllers
 *
 * @param {string} router - Main router to add sub routers
 * @param {string} routersPath - Path to all routers
 * @return {object} - Returns filled router
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
const retrieveRouters = (router, routersPath, currentPath = false) => {
  console.log(0);
  if (!currentPath)
    currentPath = routersPath;
  fs.readdirSync(currentPath).forEach(file => {
    console.log(file);
    if (file.indexOf('.js') !== -1) {
      let routeName = currentPath.length !== routersPath ?
      currentPath.substring(routersPath.length, currentPath.length) + '/' + file.split('.')[0]
        : '/' + file.split('.')[0];
      return router.use(routeName, require(currentPath + '/' + file));
    } else if (file.indexOf('.') === -1)
      return retrieveRouters(router, routersPath, currentPath + '/' + file);
  });
  return router;
};

module.exports = retrieveRouters;