import logger from './utils/logger';
// import chalk from 'chalk';
import config from './config';
import express from 'express';
import zipcodes from 'zipcodes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.all('*', function(req, res) {
  let results = zipcodes.radius(req.query.zip, req.query.radius);
  logger.info(`GET RADIUS CALL : ${req.query.zip}: ${req.query.radius}`);
  return res.json(results);
});

// start express app
app.listen(config.app.port, function() {
  logger.info('server started listening', config.app.port);
});
