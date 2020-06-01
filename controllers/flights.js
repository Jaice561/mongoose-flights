const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function create(req, res) {
    Flight.create(req.body, function() {
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All flights', flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Detail', flight });
    });
  }