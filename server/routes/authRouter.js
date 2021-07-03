var express = require('express');
var router = express.Router();

const basicAuth = require('../middleware/basicAuth');

const CreateUser = require('./auth/CreateUser');
const GenerateToken = require('./auth/GenerateToken');

router.post('/register', CreateUser);
router.post('/generate-token', basicAuth, GenerateToken);

module.exports = router;
