const express = require('express');
const { getUsers, putUser, postUser, getUserById, putPasswordUser, deleteUser , postUsrForValid} = require('../services/UserService')
const router = express.Router();


router.post('/search', async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await postUsrForValid(data);
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


router.get('/', async (req, res) => {
    try {
        const data = await getUsers();
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


    router.get('/:id', async (req, res) => {
        try {
            const Id = req.params.id;
            const data = await getUserById(Id);
            res.send(data);
        }
        catch (err) {
            res.status(500).send(err)
        }

    })



router.put('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        if (data == null) {
            return res.status(404).send("not valid requst")
        }
        const data2 = await putUser(data);
        res.send(data);
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
        const data2 = await postUser(data);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }
})


router.delete('/:id', async (req, res) => {
    console.log("came to delete user router")
    try {
        const Id = req.params.id;
        console.log(Id);
        const data = await deleteUser(Id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err)
    }

})









module.exports = router;
