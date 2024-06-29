const express = require('express');
const { cwd } = require('process');
const router = express.Router();
var url = require('url');

const { getStation, putStation, postStation, getStationById, GetStationByNumOfFreeScooters, putStationScooters, putScootersReturn } = require('../services/StationService');
const { sendEmail } = require('../services/EmailService.js');

router.get('/email', async (req, res) => {
    try {
        const data = sendEmail();
    }
    catch (err) {
        res.status(500).send(err)
    }

})



router.get('/?', async (req, res) => {
    try {
        var query = url.parse(req.url, true).query;
        let conditions = " ";
        conditions += Object.keys(query)[0];

        if (query == null) {
            const data = await getStation();
            res.send(data);
        }
        else {
            const data = await GetStationByNumOfFreeScooters(conditions);
            res.send(data);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }


})

router.put('/?', async (req, res) => {
    try {
        var query = url.parse(req.url, true).query;
        let conditions = " ";
        conditions += Object.keys(query)[0];

        if (query == null) {
            // const data = await getStation();
            ///res.send(data);
        }
        else {
            const data = await putScootersReturn(conditions);
            res.send(data);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }

})


router.get('/', async (req, res) => {
    try {
        const data = await getStation();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await getStationById(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }

})


router.put('/', async (req, res) => {
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await putStation(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }
})

router.put('/scooters', async (req, res) => {
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await putStationScooters(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }
})



router.post('/', async (req, res) => {
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postStation(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }
})
module.exports = router;