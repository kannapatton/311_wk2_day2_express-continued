const vehicles = require('../data/vehicles');
let numberOfVehicles = vehicles.length;

const allVehicles = (req, res) => {
    res.json(vehicles);
};

const byId = (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle);
};

const create = (req, res) => {
    numberOfVehicles++
    let body = req.body;
    body._id = numberOfVehicles;
    vehicles.push(body)
    res.json(body);
};

module.exports = {
    allVehicles,
    byId,
    create
};