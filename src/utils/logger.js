import winston from 'winston';
import moment from 'moment';
import 'winston-daily-rotate-file';
import * as path from 'path';

import {
  LOG_DIRECTORY,
  LOG_LEVEL,
} from '../constants';

let logger = new(winston.Logger)({
  level: LOG_LEVEL,
  transports: [
    new(winston.transports.Console)({
      colorize: 'all',
      timestamp: function() {
        return moment.utc().format('YYYY-MM-DDTHH:mm:ss.SSSZZ :');
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
      },
    }),
    new winston.transports.DailyRotateFile({
      filename: path.resolve(LOG_DIRECTORY),
      datePattern: 'yyyy-MM-dd.',
      prepend: true,
      json: false,
    }),
  ],
});
export default logger;
