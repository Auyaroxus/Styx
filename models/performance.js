const db = require('../util/database');

module.exports = class Performance {
    constructor() {

    }


    static fetchAllIndex() {
        return db.execute('SELECT * FROM performance LIMIT 6');
    }

    static fetchAll() {
        return db.execute('SELECT * FROM performance');
    }

}