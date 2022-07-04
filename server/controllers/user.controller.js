const {User} = require('../models/user.models');

module.exports = {
    index: (req, res) => {
        User.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        User.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
}