const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv/config');
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const Liste = sequelize.define('liste', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter a "titre" property'
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false,
});


module.exports = Liste
