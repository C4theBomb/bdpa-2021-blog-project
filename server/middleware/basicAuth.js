const { sha512 } = require('crypto-hash');
const Users = require('../models/User');

async function basicAuth(req, res, next) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const passwordHash = await sha512(req.body.password);

        if (!username || !password) {
            next(new Error('Unauthorized User'));
            return;
        }

        const result = await Users.findOne({ username });

        if (result.length === 0) {
            next(new Error('Unauthorized User'));
            return;
        }

        if (passwordHash === result.password) {
            next();
            return;
        } else {
            next(new Error('Unauthorized User'));
            return;
        }
    } catch (e) {
        console.log(e);

        const err = new Error('You are missing something');
        next(err);
    }
}

module.exports = basicAuth;
