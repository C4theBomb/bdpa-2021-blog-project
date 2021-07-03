const Posts = require('../../models/Post');

async function UpdatePost(req, res, next) {
    id = req.query.id;
    body = req.body;

    console.log(id);
    console.log(body);

    try {
        const result = await Posts.findByIdAndUpdate(id, { body });
        const updatedResult = await Posts.findById(id);
        res.send({ result, updatedResult });

        next();
    } catch (e) {
        console.log(e);
        res.status(500).send('Whoops, something went wrong!');

        next();
    }
}

module.exports = UpdatePost;
