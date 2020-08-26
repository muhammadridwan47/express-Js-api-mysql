const sequelize = require('sequelize');

const db = new sequelize("express_js","root","",{
    dialect: "mysql"
});

db.sync({});

module.exports = db;