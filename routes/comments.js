const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.get('/', commentsController.allComments);
router.get('/:id', commentsController.byId);
router.post('/', commentsController.create);
module.exports = router;

//should look like this: 
//const express = require('express')
// const router = express.Router()

// const vehiclesController = require('../controllers/vehicles')

// router.get('/vehicles', vehiclesController.list)

// router.get('/vehicles/:id', vehiclesController.show)

// router.post('/vehicles', vehiclesController.create)

// module.exports = router

