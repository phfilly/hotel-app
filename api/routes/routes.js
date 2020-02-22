const express = require('express');
const hotelData = require('../data');
const filterData = require('../src/filter');

// API implementation
function router() {
    const router = express.Router();
    router.route('/hotels')
    .get((req, res) => {
        const data = [...hotelData.data];
        const hotels = filterData(data, req.query);
        res.json(hotels);
    });

    return router;
}

module.exports = router;