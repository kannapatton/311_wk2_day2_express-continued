const comments = require('../data/comments');
let numberOfComments = comments.length;

const allComments = (req, res) => {
    res.json(comments);
};

const byId = (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
};

const create = (req, res) => {
    numberOfComments++
    let body = req.body;
    body._id = numberOfComments;
    comments.push(body)
    res.json(body);
};

module.exports = {
    allComments,
    byId,
    create
};