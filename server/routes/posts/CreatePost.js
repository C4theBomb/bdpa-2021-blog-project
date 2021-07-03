const User = require('../../models/User');
const Posts = require('../../models/Post');

async function CreatePost(req, res, next) {
    const username = req.username;
    const body = req.body;

    try {
        const result = await Posts.create(body);
        await User.findOneAndUpdate(
            { username },
            { $push: { posts: [result._id] } }
        );
        res.send(result);

        next();
    } catch (e) {
        console.log(e);
        res.status(500).send('Whoops, something went wrong!');

        next();
    }
}

module.exports = CreatePost;
