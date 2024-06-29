const express = require('express');
const router = express.Router();
const { getScooters, putScooter, postScooter, getScooterById, getNumOfFreeScooters , puttScooterById} = require('../services/ScooterService')



router.put('/stations', async (req, res) => {
    try {
        debugger;
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await putScooter(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
})




router.get('/numOfFreeScooters', async (req, res) => {
    try {
        const data = await getNumOfFreeScooters();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})




router.get('/', async (req, res) => {
    try {
        const data = await getScooters();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})


router.get('/:id', async (req, res) => {
    try {
        console.log("iddddddddddddd");
        const Id = req.params.id;
        const data = await getScooterById(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})



router.put('/:id', async (req, res) => {
    try {       
        const Id = req.params.id;
        const data = req.body;
        const data2 = await puttScooterById(data, Id);
        res.send(data2);
    }
    catch (err) {
        res.status(500).send(err)
    }
})



router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postScooter(data);
        res.send(data2);
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;