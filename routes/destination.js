const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destination');

router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router;