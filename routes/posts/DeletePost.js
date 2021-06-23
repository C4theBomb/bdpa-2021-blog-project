const Posts = require('../models/Post')

async function DeletePost(req, res, next) {
    id = req.query.id
    console.log(id)
    
    try {
        const result = await Posts.findByIdAndDelete(id)
        res.send(result)
        next()
    } catch(e) {
        console.log(e)
        res.status(500).send('Whoops, something went wrong!')
        
        next()
    }
}

module.exports = DeletePost