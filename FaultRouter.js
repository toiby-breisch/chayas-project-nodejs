const express = require('express');
const router = express.Router();
const { PostFault, getFaults, deleteFault, getSumFaultsByIdStation, postStationForValid } = require('../services/FaultService')


router.post('/', async (req, res) => {
    try {
        const data1 = req.body;
        const data = await PostFault(data1);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})

router.get('/', async (req, res) => {
    try {
        const data = await getFaults();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})

router.get('/:id', async (req, res) => {
    try {
        const data = await getSumFaultsByIdStation();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})


router.delete('/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await deleteFault(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }

})

router.post('/search', async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postStationForValid(data);
        console.log(data2)
        if (data2 == true) {
            console.log("tre=ue!")
            res.send(true);
        }
        else {
            console.log("fale=ue!")

            res.send(false);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;