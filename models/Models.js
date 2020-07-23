'use strict';
const Listes = require('../models/Listes')
const Elem = require('../models/Elem')



Listes.hasMany(Elem, {
    foreignKey: 'id_liste',
});
Elem.belongsTo(Listes, {
    foreignKey: 'id_liste',
});
var models = { Listes, Elem };



module.exports = models;