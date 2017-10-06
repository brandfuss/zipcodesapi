module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'zipcodesapi',
      script: 'dist/index.js',
      cwd: `${__dirname}/`,
      instances: 1,
      // watch: true,
      // exec_mode: 'cluster',
      log_file: `${__dirname}/logs/pm2.app.log`,
      out_file: `${__dirname}/logs/pm2.app.out.log`,
      error_file: `${__dirname}/logs/pm2.app.error.log`,
      env: {
        COMMON_VARIABLE: 'true',
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};