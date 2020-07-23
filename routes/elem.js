const express = require('express');
const router = express.Router();
const Models = require('../models/Models');
router.get('/', (req, res) => {
    Models.Elem.findAll().then(elems => res.json(elems));
})

router.post('/', async (req, res) => {
    const params = req.body;
    console.log("PARAMS", params)
    const newElem = Models.Elem.build({
        libelle: params.libelle,
        id_liste: params.id_liste
    })
    console.log(newElem)
    const savedElem = await newElem.save()
        .catch(error => res.json({ error }));
    res.json(savedElem)

})

module.exports = router;