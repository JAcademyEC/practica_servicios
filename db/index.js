
const Sequelize = require("sequelize");

let sequelize = null;

module.exports = function initDB(config) {

    if( !sequelize ) { 
        sequelize = new Sequelize(config); }

    return sequelize;

}
