let runConfig = {};
import logger from '../utils/logger';
import devConfig from './dev.json';
import localConfig from './local.json';
import prodConfig from './prod.json';

import {
  ENV_LOCAL,
  ENV_DEVELOPMENT,
  ENV_PRODUCTION,
} from '../constants';

switch (process.env.NODE_ENV) {
  case ENV_LOCAL:
    runConfig = localConfig;
    logger.info('Local config loaded');
    break;
  case ENV_DEVELOPMENT:
    runConfig = devConfig;
    logger.info('Dev config loaded');
    break;
  case ENV_PRODUCTION:
    runConfig = prodConfig;
    logger.info('prod config loaded');
    break;
  default:
    runConfig = devConfig;
    logger.info('Dev config loaded');
    break;
}
const config = runConfig;

export default config;
