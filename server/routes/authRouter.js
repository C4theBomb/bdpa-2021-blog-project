var express = require('express');
var router = express.Router();

const basicAuth = require('../middleware/basicAuth');
const tokenAuth = require('../middleware/tokenAuth');

const CreateUser = require('./auth/CreateUser');
const GenerateToken = require('./auth/GenerateToken');
const DeleteToken = require('./auth/DeleteToken');
const AuthorizedPosts = require('./auth/AuthorizedPosts');

router.post('/register', CreateUser);
router.post('/generate-token', basicAuth, GenerateToken);
router.delete('/delete-token', tokenAuth, DeleteToken);
router.get('/authorized-posts', tokenAuth, AuthorizedPosts);

module.exports = router;
