const { query } = require('./db.js')

async function getScooters() {
    const data = await query("SELECT * FROM users.scooter");
    if (data.length == 0) {
        throw new Error(`No Scooters!`);
    }
    return data;
}

async function getScooterById(Id) {
    const data = await query(`SELECT * FROM users.scooter WHERE IdScooter = ${Id};`);
    console.log(data);
    if (data.length == 0) {
        throw new Error(`Can't get scooter with id number: ${Id}`);
    }
    return data;
}

async function getNumOfFreeScooters() {
    const data = await query("SELECT COUNT(HasTaken) FROM users.scooter WHERE HasTaken = 1 ;");
    if (data.length == 0) {
        throw new Error(`Can't get count scooters: `);
    }
    return data;
}

async function putScooter(object1) {
    const data = await query(`UPDATE users.scooter SET  HasTaken = ${object1.HasTaken}, IdUser= ${object1.IdUser}  WHERE Idstation=${object1.Idstation} and Stutus = 'proper' limit ${object1.numOfScooters};`);
    if (data.length == 0) {
        throw new Error(`Can't get count scooters!`);
    }
    return data;
}


async function postScooter(object1) {
    const data = await query(`INSERT INTO users.scooter VALUES (${object1.IdScooter}, ${JSON.stringify(object1.Stutus)},${object1.HasTaken} ,${object1.IdUser} );`);
    if (data.length == 0) {
        throw new Error(`Can't add scooter with id number : ${object1.IdScooter}`);
    }
    return data;
}

async function puttScooterById(object1, id) {
    const data = await query(`UPDATE users.scooter SET  Stutus = ${JSON.stringify(object1.stutus)} WHERE IdScooter=${id};`);
    if (data.length == 0) {
        throw new Error(`Can't update scooter with id number : ${id}`);
    }
    return data;
}







module.exports = {
    getScooters,
    putScooter,
    postScooter,
    getScooterById,
    getNumOfFreeScooters,
    puttScooterById,

}