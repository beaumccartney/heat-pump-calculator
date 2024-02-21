const express = require('express');
const router = express.Router();
const { execSync } = require('child_process')
const { validationResult } = require('express-validator')

const base_schema = require('./api-request-schema')

router.get('/', (req, res) => {
  console.log(req)
  res.send("Hello")
});

router.post('/calc', base_schema, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const recalcOutput = recalc(req.body, 'csv_table.py');

  res.setHeader('Content-Type', 'text/csv');
  res.send(recalcOutput);
});

function recalc(input_json, script) {
  const command_string = `python ${script} '${JSON.stringify(input_json)}'`
  return execSync(command_string);
}

module.exports = router;
