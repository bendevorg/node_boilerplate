/**
 * Module to get all routers
 * @module utils/retrieveRouters
 */
import fs from 'fs';
import { Router } from 'express';

/**
 * Retrieve controllers
 *
 * @param {string} router - Main router to add sub routers
 * @param {string} routersPath - Path to all routers
 * @return {object} - Returns filled router
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
const retrieveRouters = (
  router: Router,
  routersPath: string,
  currentPath = routersPath,
) => {
  fs.readdirSync(currentPath).forEach((file: string) => {
    const isTypeFile = file.slice(-5) === '.d.ts';
    if (isTypeFile) {
      return;
    }
    if (file.slice(-3) === '.ts' || file.slice(-3) === '.js') {
      const routeName =
        currentPath.length !== routersPath.length
          ? `${currentPath.substring(routersPath.length, currentPath.length)}/${
              file.split('.')[0]
            }`
          : `/${file.split('.')[0]}`;
      /* eslint-disable-next-line global-require, import/no-dynamic-require */
      let module = require(`${currentPath}/${file}`);
      module = module.default ? module.default : module;
      router.use(routeName, module);
      return;
    }
    if (file.indexOf('.') === -1) {
      retrieveRouters(router, routersPath, `${currentPath}/${file}`);
    }
  });
};

export default retrieveRouters;
