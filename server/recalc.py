import sys
import json
import xlwings

def recalc():
    excelsheet_handle = xlwings.Book('data/ASHP Calculator - U of C.xlsm')

    input_sheet = excelsheet_handle.sheets['User Inputs']

    # NOTE: first argument must a json containing the inputs
    inputs = json.loads(sys.argv[1])
    for cell, input in zip([ 'G2', 'G4', 'G5', 'G6', ], inputs):
        input_sheet[cell].value = input

    excelsheet_handle.app.calculate()

    output_sheet = excelsheet_handle.sheets['Outputs']
    return output_sheet
