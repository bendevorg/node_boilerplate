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
const retrieveRouters = (router, routersPath, currentPath = routersPath) => {
  fs.readdirSync(currentPath).forEach(file => {
    if (file.indexOf('.js') !== -1) {
      const routeName =
        currentPath.length !== routersPath
          ? `${currentPath.substring(routersPath.length, currentPath.length)}/${
              file.split('.')[0]
            }`
          : `/${file.split('.')[0]}`;
      /* eslint-disable-next-line global-require, import/no-dynamic-require */
      router.use(routeName, require(`${currentPath}/${file}`));
      return;
    }
    if (file.indexOf('.') === -1) {
      retrieveRouters(router, routersPath, `${currentPath}/${file}`);
    }
  });
  return router;
};

module.exports = retrieveRouters;
