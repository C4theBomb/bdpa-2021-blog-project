const Posts = require('../models/Post');
const User = require('../models/User');

async function userPermissions(req, res, next) {
    const username = req.username;
    const user = await User.findOne({ username });

    if (!user.posts.includes(req.query.id)) {
        res.status(405);
        next(new Error('You do not own this post.'));
        return;
    }

    next();
}

module.exports = userPermissions;
