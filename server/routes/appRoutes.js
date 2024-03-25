/*
 * appRoutes.js
 *
 * This file defines an API route to calculate the heat pump figures. The route
 * takes a a json object with inputs to the calc as input, and returns a csv
 * representation of the excel sheet's output table.
 *
 * Express-validator is used to check the input json against the schema. If the
 * input doesn't match the schema, a 400 status is returned with a list of
 * errors.
 *
 * The route defined is /calc
 *
 * Calling into python is required to interact with the excel sheet. To interact
 * with the excel sheet in a new way, simply write a python script that
 * performs the required interaction, and define a new route here that passes
 * the name of that script and the input json to the procedure recalc()
 */

const express = require('express');
const router = express.Router();
const { spawnSync } = require('child_process')
const { body, validationResult } = require('express-validator')

// input schema - specifies the possible input fields of the input json passed to
// /calc, and their validation rules. In otherwords, the set of possible inputs
// to /calc is entirely specified by this schema. Please refer to the
// express-validator documentation for more information.
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

// definition of the /calc route
// this route takes a json input defined by the input_schema, validates the
// input against the schema, and passes it to csv_table.py
router.post('/calc', input_schema, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const recalcOutput = recalc(req.body, 'csv_table.py');

  res.setHeader('Content-Type', 'text/csv');
  res.send(recalcOutput);
});

// Takes an input json and a python script to pass the json too. Returns the
// standard out of the python script. Any API endpoint seeking to pass input
// to a python script and get said script's output can pass the input and the
// name of the script to this function
function recalc(input_json, script) {
  return spawnSync(
        'python',
        [script, JSON.stringify(input_json)],
        { encoding: 'utf-8' }
    ).stdout
}

module.exports = router;
