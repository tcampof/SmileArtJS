var express = require('express');
var router = express.Router();
const cntrl = require('../controllers/usuario.controller');

router
    .get('/', cntrl.read)
module.exports = router;