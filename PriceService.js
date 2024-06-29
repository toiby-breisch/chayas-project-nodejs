const { query } = require('./db.js')

async function getPricesScooters() {
    const data = await query("SELECT * FROM users.prices ORDER BY price ASC;");
    if (data.length == 0) {
        throw new Error(`Can't get prices!`);
    }
    return data;
}

module.exports = {
    getPricesScooters,
}



