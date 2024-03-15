import sys
import json
import xlwings

def recalc():
    excelsheet_handle = xlwings.Book('data/ASHP Calculator - U of C.xlsm')

    input_sheet = excelsheet_handle.sheets['User Inputs']

    # NOTE: first argument must a json containing the inputs
    input_json = json.loads(sys.argv[1])
    for (cell, json_key) in (
        ('G2', 'buildYear',                  ),
        ('G4', 'sizeOfHome',                 ),
        ('G5', 'existingFurnaceEfficiency',  ),
        ('G6', 'heatPumpSelector',           ),
        ('N3', 'HEFUpgradeEstimate',         ),
        ('N4', 'heatPumpHEFInstallEstimate', ),
        ('N5', 'solarPVInstallEstimate',     ),
        ('N6', 'costOfNaturalGas',           ),
        ('N7', 'costOfElectricity',          ),
    ):
        input_sheet[cell].value = input_json[json_key]

    excelsheet_handle.app.calculate()

    output_sheet = excelsheet_handle.sheets['Outputs']
    return output_sheet

