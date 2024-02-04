import sys
import xlwings as xw
from icecream import ic
import json

wb = xw.Book('data/ASHP Calculator - U of C.xlsm')

input_sheet  = wb.sheets['User Inputs']
output_sheet = wb.sheets['Outputs']

# read in inputs
inputs = json.loads(sys.argv[1])

# populate input cells
for cell, input in zip([ 'G2', 'G4', 'G5', 'G6', ], inputs):
    input_sheet[cell].value = input

wb.app.calculate()

results = [output_sheet[key].value for key in [ 'E5', 'G5', 'J5', 'K5', ]]

json.dump(results, sys.stdout)

# pull the whole table into a csv
# import csv
# table = outputs.range('D2:L6').value
#
# Writing to CSV
# with open('output.csv', mode='w', newline='') as file:
#     writer = csv.writer(file)
#
#     writer.writerows(table)
