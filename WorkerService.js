const { query } = require('./db.js')

async function getWorkers() {
    const data = await query("SELECT * FROM users.workers");
    if (data.length == 0) {
        throw new Error(`No Workers!`);
    }
    return data;
}

async function getWorkerById(Id) {
    const data = await query(`SELECT * FROM users.workers WHERE IdWorker =${Id} ;`);
    if (data.length == 0) {
        throw new Error(`Can't get worker with id number: ${Id}`);
    }
    return data;
}


async function putWorker(object1) {
    const data = await query(`UPDATE users.workers SET IdWorker=${object1.IdWorker} , Name=${JSON.stringify(object1.Name)},Password = ${object1.Password}, Email = ${JSON.stringify(object1.Email)}  WHERE IdWorker=${object1.IdWorker};`);
    if (data.length == 0) {
        throw new Error(`Can't update worker with id number: ${object1.IdWorker}`);
    }
    return data;
}


async function postWorker(object1) {
    const data = await query(`INSERT INTO users.workers VALUES (${object1.IdWorker},${JSON.stringify(object1.Name)}, ${object1.Password}, ${JSON.stringify(object1.Email)});`);
    if (data.length == 0) {
        throw new Error(`Can't add worker with id number: ${object1.IdWorker}`);
    }
    return data;
}

async function getOrders() {
    console.log("cv1!!!");
    const order = await query(`SELECT users.scooter.IdScooter, users.users.Id, users.users.Name, users.users.Email
    FROM users.scooter
    INNER JOIN users.users ON users.scooter.IdUser=users.users.Id`);
    if (order.length == 0) {
        throw new Error(`No orders!`);
    }
    return order;
}

async function postWorkerForValid(object1) {
    const data = await query(`SELECT * FROM users.workers`);
    if (data.some(x => x.IdWorker == object1.IdWorker)) {
        return true;
    }
    return false;
}


async function postManegerPass(object1) {
    const data = await query(`select exists (select * from users.manegers where Password = ${object1.Password});`);
    if (data) {
        return true;
    }
    else {
        return false;

    }
}

async function deleteWorker(id) {
    const data = await query(`DELETE from users.workers where IdWorker = ${parseInt(id)}`);
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    if (data.length == 0) {
        throw new Error(`Can't delete woeker with id number: ${parseInt(id)}`);
    }
    return data;
}



module.exports = {
    getWorkers,
    putWorker,
    postWorker,
    getWorkerById,
    getOrders,
    postWorkerForValid,
    postManegerPass, 
    deleteWorker
}