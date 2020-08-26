const { Sequelize } = require("sequelize");
const db = require("../config/db");


const Coba  = db.define(
        "coba",
        {
            nama: {type: Sequelize.STRING},
            alamat: {type: Sequelize.STRING}

        },
        {
            freezeTableName: true
        }
);

module.exports = Coba;