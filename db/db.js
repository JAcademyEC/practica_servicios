
const Sequelize = require("sequelize");

const dbConfig = require("../conf").db;
const initDB = require("./index");

const db = {}

db.Sequelize = Sequelize;
db.sequelize = initDB(dbConfig);

db.usuario = require('../models/Usuario')(db.sequelize, Sequelize);

module.exports = db;
