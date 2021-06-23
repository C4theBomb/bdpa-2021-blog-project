const Posts = require('../models/Post')

async function CreatePost(req, res, next) {
    const body = req.body
    
    try {
        const result = await Posts.create(body)
        res.send(result)
        
        next()
    } catch(e) {
        console.log(e)
        res.status(500).send('Whoops, something went wrong!')
        
        next()
    }
}

module.exports = CreatePost