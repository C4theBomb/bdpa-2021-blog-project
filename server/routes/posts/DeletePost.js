const User = require('../../models/User');
const Posts = require('../../models/Post');

async function DeletePost(req, res, next) {
    const id = req.query.id;
    const username = req.username;

    try {
        const result = await Posts.findByIdAndDelete(id);
        await User.findOneAndUpdate(
            { username },
            { $pull: { posts: result._id } }
        );
        res.send(result);

        next();
    } catch (e) {
        console.log(e);
        res.status(500).send('Whoops, something went wrong!');

        next();
    }
}

module.exports = DeletePost;
