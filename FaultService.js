const { query } = require('./db.js')

async function PostFault(object1) {
    const data = await query(`INSERT INTO users.faults VALUES (default,${JSON.stringify(object1.Comments)},${object1.IdSation}, ${object1.IdProduct});`);
    if (data.length == 0) {
        throw new Error(`Can't add Faults!`);
    }
    return data;
}

async function getFaults() {
    const data = await query("SELECT * FROM users.faults");
    if (data.length == 0) {
        throw new Error(`Can't get Faults!`);
    }
    return data;
}

async function deleteFault(id) {
    const data = await query(`DELETE from users.faults where Id = ${parseInt(id)};`);
    if (data.length == 0) {
        throw new Error('No fault to delte')
    }
    return data;
}
async function getSumFaultsByIdStation() {
    const data = await query("select count(Id) as IdStatoin from users.faults");
    if (data.length == 0) {
        throw new Error(`Can't get Faults!`);
    }
    return data;
}

async function postStationForValid(object1) {
    const data1 = await query(`select * from users.scooter where Idstation =  ${object1.IdStation} and IdScooter = ${object1.IdScooter} and HasTaken = 0;`);
    if(data1.length == 0 ){
        return false;
    }
    else{
        return true;
    }

}



module.exports = {
    PostFault,
    getFaults,
    deleteFault,
    getSumFaultsByIdStation, 
    postStationForValid
}


