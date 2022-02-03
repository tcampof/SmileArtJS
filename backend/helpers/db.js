var { config } = require('./config.js');
const logger = require('../helpers/logger')(__filename);
const DBConfig = config.DATABASE;

var knexDB = require('knex')({
    client: 'mssql',
    connection: {
        host: DBConfig.HOST,
        user: DBConfig.USER,
        password: DBConfig.PASS,
        database: DBConfig.DB,
        requestTimeout: 750000,
        connectionTimeout: 5000
    },
    pool: {
        min: 2,
        max: 300,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false // <- default is true, set to false
    }
});



module.exports = {
    knexDB    
};
