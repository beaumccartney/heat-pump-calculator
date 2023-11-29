const express = require('express');
const router = express.Router();

const data = require('../data/data.js');

router.get('/', (req, res) => {

    data.xlsxManipulation(15)
        .then(result => {
            res.send(String(result));
        })
        .catch(error => {
            console.error("Error:", error)
        })
});

module.exports = router;