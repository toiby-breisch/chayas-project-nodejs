const { query } = require('./db.js')

async function getUsers() {
    const data = await query("SELECT *FROM users.users");
    if (data.length == 0) {
        throw new Error("No Users")
    }
    return data;
}

async function getUserById(Id) {
    const data = await query(`SELECT * FROM users.users WHERE Id = ${Id};`);
    if (data.length == 0) {
        throw new Error(`No User with id: ${id}`);
    }
    return data;
}


async function putUser(object1) {
    const data = await query(`UPDATE users.users SET Name=${JSON.stringify(object1.Name)} ,Email = ${JSON.stringify(object1.Email)} , NumOfScooters = ${object1.NumOfScooters},Password = ${parseInt(object1.PassWord)} =  WHERE Id=${object1.IdUser};`);
    if (data.length == 0) {
        throw new Error(`Can't update user with id number: ${object1.IdUser}`);
    }
    return data;
}

async function postUser(object1) {
    const data = await query(`INSERT INTO users.users VALUES (${object1.IdUser},${JSON.stringify(object1.Name)}, ${JSON.stringify(object1.Email)} ,${object1.NumOfScooters}, ${parseInt(object1.PassWord)});`);
    if (data.length == 0) {
        throw new Error(`Can't add user with id number: ${object1.IdUser}`);
    }
    return data;
}

async function deleteUser(id) {
    const data = await query(`DELETE from users.users where Id = ${parseInt(id)};`);
    if (data.length == 0) {
        throw new Error(`Can't delete user with id number: ${parseInt(id)}`);
    }
    return data;
}

async function postUsrForValid(id) {
    console.log("vvvvvv");
    const data = await query(`SELECT * FROM users.users`);
    console.log(data);
    if (data.some((x) => x.Id == id)) {
        return true;
    }
    return false;
}

module.exports = {
    getUsers,
    putUser,
    postUser,
    getUserById,
    deleteUser, 
    postUsrForValid
}


