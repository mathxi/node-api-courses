const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv/config');
const Listes = require('./Listes')
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const Elem = sequelize.define('liste_elem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter a "libelle" property'
            }
        }
    },
    id_liste: {
        type: DataTypes.INTEGER,
        references: {
            model: Listes,
            key: 'id'
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Elem;