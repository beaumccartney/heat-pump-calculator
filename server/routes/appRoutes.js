const express = require('express');
const router = express.Router();
const { spawnSync } = require('child_process')
const { body, validationResult } = require('express-validator')

const input_schema = [
  body('buildYear')                 .isIn(["<1949", "1950-1959", "1960-1981", "1982-1990", "1991-1997", "1998-2006", "2007-2014", "2015-present"]),
  body('sizeOfHome')                .isInt({ min: 0 }),
  body('existingFurnaceEfficiency') .default("I don't know").isIn(["I don't know", 0.8, 0.92, 0.97]),
  body('heatPumpSelector')          .default("Unit 1").isIn(["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]),

  // advanced options with default values taken from the excel sheet
  body('HEFUpgradeEstimate')        .default(8000)     .isInt({ min: 0 }),
  body('heatPumpHEFInstallEstimate').default(10000)    .isInt({ min: 0 }),
  body('solarPVInstallEstimate')    .default(12000)    .isInt({ min: 0 }),
  body('costOfNaturalGas')          .default("Current").isIn(["High","Current","Low"]),
  body('costOfElectricity')         .default("Current").isIn(["High","Current","Low"]),
]

router.get('/', (req, res) => {
  console.log(req)
  res.send("Hello")
});

router.post('/calc', input_schema, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const recalcOutput = recalc(req.body, 'csv_table.py');

  res.setHeader('Content-Type', 'text/csv');
  res.send(recalcOutput);
});

function recalc(input_json, script) {
  return spawnSync(
        'python',
        [script, JSON.stringify(input_json)],
        { encoding: 'utf-8' }
    ).stdout
}

module.exports = router;
