const db = require('../util/database');

module.exports = class Gallery {
    constructor() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM pictures');
    }

}