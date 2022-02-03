// const { body } = require('express-validator/check')
const logger = require('../helpers/logger')(__filename);
const srvUsuario = require('../services/usuarios.service');

const ctrl = {

    read: async (req, res) => {
        try {
            var user = await srvUsuario.read(req.params.usuario);
            res.json({ status: true, data: user });
        } catch (ex) {
            res.status(500).json({ status: false, data: ex });
            logger.error(JSON.stringify(ex));
        }
    },

};

module.exports = ctrl;
