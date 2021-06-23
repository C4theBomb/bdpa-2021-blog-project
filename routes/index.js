var express = require('express');
var router = express.Router();

const GetPost = require('./posts/GetPost')
const CreatePost = require('./posts/CreatePost')
const DeletePost = require('./posts/DeletePost')
const UpdatePost = require('./posts/UpdatePost')

router.get('/', GetPost);

router.post('/create', CreatePost);

router.delete('/delete', DeletePost);

router.patch('/update', UpdatePost);

module.exports = router;