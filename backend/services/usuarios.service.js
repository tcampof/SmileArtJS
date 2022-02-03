var { config } = require('../helpers/config.js');
const { knexDB } = require('../helpers/db');

const srv = {
    read: async () => {
        try {
            var user = await knexDB.from('usuario').select("*");
            console.log(user);
            return user;
        } catch (ex) {
            console.log(ex);
            throw { error: ex, code: 500 };
        }
    },

};

module.exports = srv;