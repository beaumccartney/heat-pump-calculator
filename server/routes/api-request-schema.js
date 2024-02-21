const { body } = require('express-validator')

const base_schema = [
  body('buildYear')                 .isIn(["<1949", "1950-1959", "1960-1981", "1982-1990", "1991-1997", "1998-2006", "2007-2014", "2015-present"]),
  body('sizeOfHome')                .isInt(),
  body('existingFurnaceEfficiency') .isIn(["I don't know", 0.8, 0.92, 0.97]),
  body('heatPumpSelector')          .isIn(["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]),

  // advanced options with default values taken from the excel sheet
  body('HEFUpgradeEstimate')        .default(5500)     .isInt(),
  body('heatPumpHEFInstallEstimate').default(10000)    .isInt(),
  body('solarPVInstallEstimate')    .default(6000)     .isInt(),
  body('costOfNaturalGas')          .default("Current").isIn(["High","Current","Low"]),
  body('costOfElectricity')         .default("Current").isIn(["High","Current","Low"]),
]

module.exports = base_schema
