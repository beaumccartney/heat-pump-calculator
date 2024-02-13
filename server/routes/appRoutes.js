const express = require('express');
const router = express.Router();
const { execSync } = require('child_process')

const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require('./api-request-schema');
const validate = ajv.compile(schema);


router.get('/', (req, res) => {
  console.log(req)
  res.send("Hello")
});

router.post('/calc', (req, res) => {
  const recalcOutput = recalc(req.body, 'prototype.py');

  const outputData = JSON.parse(recalcOutput);
  res.json(outputData);
});

router.post('/calc_table', (req, res) => {
  const recalcOutput = recalc(req.body, 'csv_table.py');

  res.setHeader('Content-Type', 'text/csv');
  res.send(recalcOutput);
});

function recalc(input_json, script) {
  console.log(validate(input_json))

  const command_string = `python ${script} '${JSON.stringify(input_json)}'`
  return execSync(command_string);
}

module.exports = router;
