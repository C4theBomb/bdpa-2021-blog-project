const { sha512 } = require('crypto-hash');

const Tokens = require('../../models/Token');

async function GenerateToken(req, res, next) {
    const token = await sha512(`${new Date()}${req.username}`);
    const username = req.body.username;

    await Tokens.deleteMany({ username });
    Tokens.create({ username, token });

    res.send(token);
}

module.exports = GenerateToken;
