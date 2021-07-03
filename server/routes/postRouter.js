var express = require('express');
var router = express.Router();

const tokenAuth = require('../middleware/tokenAuth');
const userPermissions = require('../middleware/userPermissions');

const GetPost = require('./posts/GetPost');
const GetOnePost = require('./posts/GetOnePost');
const CreatePost = require('./posts/CreatePost');
const DeletePost = require('./posts/DeletePost');
const UpdatePost = require('./posts/UpdatePost');

router.use(tokenAuth);

router.get('/', GetPost);
router.get('/:id', GetOnePost);
router.post('/create', CreatePost);
router.delete('/delete', userPermissions, DeletePost);
router.patch('/update', userPermissions, UpdatePost);

module.exports = router;
