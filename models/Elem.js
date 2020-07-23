const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv/config');
const Listes = require('./Listes')
const sequelize = new Sequelize('mysql://jama4091_coursesad:Bkq7pfx199899!@aiguillette.o2switch.net:3306/jama4091_courses');

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