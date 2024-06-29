const { query } = require('./db.js')

async function getStation() {
    const data = await query("SELECT * FROM users.stations");
    if (data.length == 0) {
        throw new Error(`No stations!`);
    }
    return data;
}

async function getStationById(Id) {
    const data = await query(`SELECT * FROM users.stations WHERE IdStation = ${Id};`);
    if (data.length == 0) {
        throw new Error(`Can't get station with id number: ${Id}`);
    }
    return data;
}

async function putStation(object1) {
    const data = await query(`UPDATE users.stations SET IdStation=${object1.IdStation} ,   Location =${JSON.stringify(object1.Location)} ,NumOfFreeScooter = ${object1.NumOfFreeScooter}  WHERE IdStation=${object1.IdStation};`);
    if (data.length == 0) {
        throw new Error(`Can't update station with id number: ${object1.IdStation}`);
    }
    return data;
}

async function putStationScooters(object1) {
    const data = await query(`UPDATE users.stations SET NumOfFreeScooter = ${object1.NumOfFreeScooter}  WHERE IdStation=${object1.IdStation};`);
    if (data.length == 0) {
        throw new Error(`Can't update station with id number: ${object1.IdStation}`);
    }
    return data;
}


async function postStation(object1) {
    const data = await query(`INSERT INTO users.stations VALUES (${object1.IdStation},${JSON.stringify(object1.Location)},${object1.NumOfFreeScooter});`);
    if (data.length == 0) {
        throw new Error(`Can't add station with id number: ${object1.IdStation}`);
    }
    return data;
}


async function GetStationByNumOfFreeScooters(query1) {
    const data = await query(`SELECT * FROM users.stations WHERE ${query1};`);
    if (data.length == 0) {
        throw new Error(`Can't get station with query : ${query1} `);
    }
    return data;
}

async function putScootersReturn(query1) {
    const data = await query(`UPDATE users.stations SET HasTaken = 0 WHERE ${query1};`);
    if (data.length == 0) {
        throw new Error(`Can't update station with query : ${query1} `);
    }
    return data;
}

module.exports = {
    getStation,
    putStation,
    postStation,
    getStationById,
    GetStationByNumOfFreeScooters,
    putStationScooters,
    putScootersReturn
}


