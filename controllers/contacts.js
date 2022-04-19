const contacts = require('../data/contacts');
let numberOfContacts = contacts.length;

const allContacts = (req, res) => {
    res.json(contacts);
};

const byId = (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
};

const create = (req, res) => {
    numberOfContacts++
    let body = req.body;
    body._id = numberOfContacts;
    contacts.push(body)
    res.json(body);
};

module.exports = {
    allContacts,
    byId,
    create
};