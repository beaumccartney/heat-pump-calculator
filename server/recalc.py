import sys
import json
import xlwings as xw

def recalc():
    wb = xw.Book('data/ASHP Calculator - U of C.xlsm')

    input_sheet  = wb.sheets['User Inputs']

    # NOTE: first argument must a json containing the inputs
    inputs = json.loads(sys.argv[1])
    for cell, input in zip([ 'G2', 'G4', 'G5', 'G6', ], inputs):
        input_sheet[cell].value = input

    wb.app.calculate()

    output_sheet = wb.sheets['Outputs']
    return output_sheet
