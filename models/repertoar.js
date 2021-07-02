const db = require('../util/database');

module.exports = class Repertoar {
    constructor() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM repertoar');
    }
}