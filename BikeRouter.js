// const express = require('express');
// const router = express.Router();
// const {getBikes, putBike, postBike , getBikeById} =  require('../services/BikeService');

//  router.get('/',async (req, res) => {
//     const data = await getBikes();
//     res.send(data);
// })

// router.get('/:id',async (req, res) => {
//     const Id = req.params.id;
//     const data = await getBikeById(Id);
//     res.send(data);
// })


// // router.post('/', async(req, res, next) => {    
// //     const data = req.body;
// //     await postBike(data);
// //     console.log(data);
// //     res.send(data)
// // })



// router.put('/', async (req, res) => {
//     try {
//         const data = req.body;
//         console.log(data)
//         if (data == null) {
//            return res.status(404).send("not valid requst")
//         }
//         const data2 = await putBike(data);
//         res.send(data);
//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// })


// router.post('/', async (req, res) => {
//     try {
//         const data = req.body;
//         console.log(data)
//         if (data == null) {
//            return res.status(404).send("not valid requst")
//         }
//         const data2 = await postBike(data);
//         res.send(data2);
//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// })




// module.exports = router;