const express = require('express');
const router = express.Router();

const flightCtrl = require('../controllers/flights')
router.post('/:flightId/tickets/new', flightCtrl.addTicket)
router.get('/new', flightCtrl.new)
router.post('/', flightCtrl.create)

router.get('/', flightCtrl.index)



router.get('/:id', flightCtrl.show);



module.exports = router;