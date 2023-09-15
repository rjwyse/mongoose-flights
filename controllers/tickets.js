const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addTicket
}

async function newTicket(req, res) {
    const tickets = await Ticket.find()
    res.render('tickets/new', {title: 'Add Ticket', tickets})
}

async function create(req, res) {
    console.log(req.body)
    req.body.price = parseInt(req.body.price)
    console.log('here', req.body)
    delete req.body.flight
    console.log(req.body)
    const ticket = await Ticket.create(req.body)
    console.log(ticket)
    
    res.redirect(`/tickets/${ticket._id}`)
}

async function addTicket(req, res) {
    const flight = await Flight.find(req.params.id)
    flight.tickets.push(req.body.ticketId)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)
}