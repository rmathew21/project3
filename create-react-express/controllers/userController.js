const db = require("../models");

module.exports = {
    findall: function(req, res) {
        db.UserData.find(req.query).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}