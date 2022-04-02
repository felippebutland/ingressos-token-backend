import dotenv from 'dotenv';

import {
  version as appVersion,
  name as appName,
  author as author,
} from '../../package.json';

dotenv.config({
  path: {
    production: '.env',
    development: '.env',
  }[process.env.NODE_ENV || 'production'],
});

const appConfig = {
  NAME: appName,
  VERSION: appVersion,
  CONTRIBUTORS: author,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
};

export default appConfig;
