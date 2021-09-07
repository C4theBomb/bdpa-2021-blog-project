const Users = require('../../models/User');

async function AuthorizedPosts(req, res, next) {
    try {
        const username = req.username;
        const result = await Users.findOne({ username });
        const postList = await result.posts;

        res.send(postList);
    } catch (error) {
        console.log(error);

        res.status(500).send('Whoops, something went wrong!');
    }
}

module.exports = AuthorizedPosts;
