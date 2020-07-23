const express = require('express');

const router = express.Router();
const Models = require('../models/Models')

router.get('/', (req, res) => {
    Models.Listes.findAll().then(listes => res.status(200).json(listes));
})
router.get('/elems', (req, res) => {
    Models.Listes.findAll({ include: Models.Elem })
        .then(listes => res.status(200)
            .json(listes))
        .catch(err => res.status(404).json(err.message));
})
router.post('/', async (req, res) => {
    const newList = Models.Listes.build({
        titre: req.body.titre
    })

    const savedList = await newList.save()
        .catch(error => res.status(400).json({ message: error.errors.map((error) => error.message) }));
    res.status(200).json(savedList)

})
router.delete('/', async (req, res) => {
    console.log("received ID : ", req.body)
    const removedListe = await Models.Listes.destroy({
        where: {
            id: req.body.id
        }
    }).catch(error => res.status(404).json({ removed: false }));

    res.status(200).json({ "removed": removedListe });

})

module.exports = router;