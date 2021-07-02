const db = require('../util/database');

module.exports = class User {
    constructor() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }
}