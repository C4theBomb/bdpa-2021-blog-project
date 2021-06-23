const Posts = require('../models/Post')

async function GetPost(req, res, next) {
    try { 
        const result = await Posts.find({}, 'title body').sort('-created')
        res.send(result)
        
        next()
    } catch (e) {
        console.log(e)
        res.status(500).send('Whoops, something went wrong!')
        
        next()
    }
}

module.exports = GetPost