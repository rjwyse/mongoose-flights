const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newflight,
  create,
  
};

async function index(req, res, next) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All flights', flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'flight Detail', flight });
}

function newflight(req, res, next) {
  res.render('flights/new', { title: 'Add flight', errorMsg: '' });
}

async function create(req, res) {
  try {
      await Flight.create(req.body)
      res.redirect('/flights')
  } catch (err) {
      console.log(err)
      res.render('flight/new', { errorMsg: err.message })
  }
}