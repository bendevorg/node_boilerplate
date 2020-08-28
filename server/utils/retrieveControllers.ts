/**
 * Module to get all controllers for a router
 * @module utils/retrieveControllers
 */
import path from 'path';
import fs from 'fs';
import logger from 'log-champ';
import { IModuleDictionary } from '../interfaces/common';

/**
 * Retrieve controllers
 *
 * @param {string} filename - Router name to get controllers
 * @return {array} - Returns an array with all controllers
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
export default (filename: string) => {
  const controllersPath = path.resolve(__dirname, `../controllers/${filename}`);
  const controllers: IModuleDictionary = {};

  try {
    // Get our routers
    fs.readdirSync(controllersPath).forEach((file: string) => {
      const isTypeFile = file.slice(-5) === '.d.ts';
      if (isTypeFile) {
        return;
      }
      if (file.slice(-3) === '.ts' || file.slice(-3) === '.js') {
        /* eslint-disable-next-line global-require, import/no-dynamic-require */
        let module = require(`${controllersPath}/${file}`);
        module = module.default ? module.default : module;
        controllers[file.split('.')[0]] = module;
      }
    });
  } catch (err) {
    logger.error(err);
  }

  return controllers;
};
