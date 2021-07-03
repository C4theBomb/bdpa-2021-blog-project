const Posts = require('../../models/Post');

async function GetOnePost(req, res, next) {
    id = req.params.id;

    try {
        const result = await Posts.findById(id);
        res.send(result);

        next();
    } catch (e) {
        console.log(e);
        res.status(500).send('Whoops, something went wrong!');

        next();
    }
}

module.exports = GetOnePost;
