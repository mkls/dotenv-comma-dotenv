'use strict';

const dotenvHaphap = require('./main');

const paths = (getPathsFromEnv() || getPathsFromCli() || '.env').split(',');
dotenvHaphap.config(...paths);

function getPathsFromEnv() {
  return process.env.DOTENV_PATHS || null
}

function getPathsFromCli() {
  const re = /^dotenv_paths=(.+)$/;
  const matchingOption = process.argv.find(arg => arg.match(re));

  if (matchingOption) {
    const matches = matchingOption.match(re);
    return matches[1];
  } else {
    return null;
  }
}