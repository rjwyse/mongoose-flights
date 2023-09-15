const Flight = require('../models/flight');
const Ticket = require('../models/ticket')


module.exports = {
  new: newFlight,
  index,
  show,
  create,
  addTicket
  
};

async function create(req, res) {
  try {
      await Flight.create(req.body)
      res.redirect('/flights')
  } catch (err) {
      console.log(err)
      res.render('flight/new', { errorMsg: err.message })
  }
}

function newFlight(req, res, next) {
  res.render('flight/new', {
      errorMsg: ''
  })
}

async function index(req, res, next) {
  const flights = await Flight.find()
  res.render('flights/index', {
      flights
  })
}

async function show(req, res) {
  console.log(req.params)
  const flight = await Flight.findById(req.params.id) 
  const ticket = await Ticket.find()
  res.render('flights/show', { title: 'Flight Details', flight, ticket });
}

async function addTicket(req, res) {
  const flight = await Flight.findById(req.params.flightId)
  flight.tickets.push(req.body.ticketId)
  try {
      await flight.save()
      res.redirect(`/flights/${flight._id}`)
  } catch(err) {
console.log(err)
  }
}