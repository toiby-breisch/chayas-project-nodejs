const express = require('express');
const router = express.Router();
const { getWorkers, postWorker, getWorkerById, putWorker, getOrders, postWorkerForValid, postManegerPass, deleteWorker } = require('../services/WorkerService');

router.get('/', async (req, res) => {
    try {
        const data = await getWorkers();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})

router.get('/orders', async (req, res) => {
    console.log("cv!!")
    try {
        const data = await getOrders();
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }

})



router.get('/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await getWorkerById(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
})


router.put('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await putWorker(data);
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
        const data2 = await postWorker(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }
})

router.post('/search', async (req, res) => {
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postWorkerForValid(data);        
        if (data2 == true) {
            res.send(true);
        }
        else{
            res.send(false);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
})



router.post('/maneger', async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postManegerPass(data);
        debugger
        console.log({data2});
        
        if (data2 == true) {
            res.send(true);
        }
        else{
            res.send(false);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await deleteWorker(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }

})

module.exports = router;