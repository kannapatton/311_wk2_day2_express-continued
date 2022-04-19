const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.allContacts);
router.get('/:id', contactsController.byId);
router.post('/', contactsController.create);
module.exports = router;


//should look like this: 
//const express = require('express')
// const router = express.Router()

// const vehiclesController = require('../controllers/vehicles')

// router.get('/vehicles', vehiclesController.list)

// router.get('/vehicles/:id', vehiclesController.show)

// router.post('/vehicles', vehiclesController.create)

// module.exports = router