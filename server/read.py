import xlwings as xw
from icecream import ic

import json

wb = xw.Book('data/ASHP Calculator - U of C.xlsm')

inputs  = wb.sheets['User Inputs']
outputs = wb.sheets['Outputs']

# input cells we actually care about
for cell in [ 'G2', 'G4', 'G5', 'G6', ]:
    ic(inputs[cell].value)

results = [outputs[key].value for key in [ 'E5', 'G5', 'J5', 'K5', ]]
ic(results)

with open("results.json", "w") as outfile:
    json.dump(results, outfile)

# ic( wb.sheets['Outputs'].range('k4').value )
# wb.sheets['User Inputs'].range('g4').value = 1500
# wb.app.calculate()
# ic( wb.sheets['Outputs'].range('k4').value )
# ic( wb.sheets['Outputs']['G3'].value )

# pull the whole table into a csv
# import csv
# table = outputs.range('D2:L6').value
#
# Writing to CSV
# with open('output.csv', mode='w', newline='') as file:
#     writer = csv.writer(file)
#
#     writer.writerows(table)
