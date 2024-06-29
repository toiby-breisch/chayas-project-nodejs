// const { query } = require('./db.js')

// async function getBikes() {
//     const data = await query("SELECT * FROM users.bikes");
//     return data;
// }

// async function getBikeById(Id) {
//     const data = await query(`SELECT * FROM users.bikes WHERE IdBike = ${Id};`);
//     return data;
// }

// async function putBike(object1) {
//     const data = await query(`UPDATE users.bikes SET IdBike=${object1.IdBike} , Stutus=${JSON.stringify(object1.Stutus)}, HasTaken = ${object1.HasTaken}  WHERE IdBike=${object1.IdBike};`);
//     return data;
// }

// async function postBike(object1) {
//     console.log(object1);
//     const data = await query(`INSERT INTO users.bikes VALUES (${object1.IdBike},${JSON.stringify(object1.Stutus)}, ${object1.HasTaken});`);
//     console.log(data);
//     return object1;
//     //const data = await query(`INSERT INTO users.bikes VALUES (${object1.IdBike},${JSON.stringify(object1.Stutus)}, ${object1.HasTaken});`);
//     //return data;
// }


// module.exports = {
//     getBikes,
//     putBike, 
//     postBike,
//     getBikeById
//  }