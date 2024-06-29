const express = require('express');
const { getPricesScooters, getPricesBikes } = require('../services/PriceService');
const router = express.Router();
var url = require('url');




router.get('/Scooters', async (req, res) => {
    try {
        const data = await getPricesScooters();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})

module.exports = router;