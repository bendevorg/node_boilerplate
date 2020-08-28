/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import fs, { Stats } from 'fs';
import path from 'path';
import readline from 'readline';
import { IStringDictionary } from '../server/interfaces/common';

const filename = '.env';
const file = path.resolve(`${process.cwd()}/${filename}`);
const credentialsPath = path.resolve(`${process.cwd()}/.credentials`);
const environmentFile = `${process.cwd()}/tools/environment.json`;

const configVars: IStringDictionary[] = [];

/**
 * Get all our configs inside de configs folder
 */

/**
 * Constant that will contain the .env variables
 * If you want a new environment variable on build add here
 */

if (fs.existsSync(environmentFile)) {
  configVars.push(require(environmentFile)[process.argv[2]]);
}

// Get our credential files
if (fs.existsSync(credentialsPath)) {
  fs.readdirSync(credentialsPath).forEach((credentialFile: string) => {
    if (credentialFile.indexOf('.json') !== -1) {
      const credentialFileName = `${credentialsPath}/${credentialFile}`;
      configVars.push(require(credentialFileName)[process.argv[2]]);
    }
  });
}

/**
 * Write the .env file
 */
function completeFile() {
  const writeStream = fs.createWriteStream(file);

  configVars.forEach((config) => {
    const configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
      const envVar = config[configKeys[i]];
      const newLine = `${configKeys[i]}=${envVar}`;
      console.log(`writing to file: ${newLine}`);
      writeStream.write(`${newLine}\n`);
    }
  });

  writeStream.end('');
  console.log(`${filename} is ok!`);
}

/**
 * Read the .env file
 */
function readFile() {
  const lineReader = readline.createInterface({
    input: fs.createReadStream(file),
  });

  lineReader.on('close', completeFile);
}

/**
 * Create a new file using the name filename
 * Used if the .env already doest not exists
 */
function createFile() {
  fs.writeFile(file, '', () => readFile());
}

/**
 * Check if the .env already exists. If it does read it
 * If it don't create it with the envVars
 *
 * @param {object} err
 * @param {object} stats
 */
function onStat(err: NodeJS.ErrnoException | null, stats: Stats) {
  if (!err && stats.isFile()) {
    readFile();
  } else {
    console.log(`${filename} does not exist, creating it.`);
    createFile();
  }
}

console.log(`checking file ${filename}`);
/**
 * Check the stat of the file .env
 * Calling the callback onStat
 */
fs.stat(file, onStat);
