/**
 * Module to get all schemas for a router
 * @module utils/retrieveSchemas
 */
import path from 'path';
import fs from 'fs';
import logger from 'log-champ';
import { IModuleDictionary } from '../interfaces/common';

/**
 * Retrieve schemas
 *
 * @param {string} filename - Router name to get schemas
 * @return {array} - Returns an array with all schemas
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
export default (filename: string) => {
  const schemasPath = path.resolve(__dirname, `../schemas/${filename}`);
  const schemas: IModuleDictionary = {};

  try {
    // Get our routers
    fs.readdirSync(schemasPath).forEach((file: string) => {
      const isTypeFile = file.slice(-5) === '.d.ts';
      if (isTypeFile) {
        return;
      }
      if (file.slice(-3) === '.ts' || file.slice(-3) === '.js') {
        /* eslint-disable-next-line global-require, import/no-dynamic-require */
        let module = require(`${schemasPath}/${file}`);
        module = module.default ? module.default : module;
        schemas[file.split('.')[0]] = module;
      }
    });
  } catch (err) {
    logger.error(err);
  }

  return schemas;
};
